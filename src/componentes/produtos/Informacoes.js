import React from 'react';
import { Redirect } from 'react-router';

export default class Informacoes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false
        }

        this.EnviarPedido = this.EnviarPedido.bind(this);
    }

    async EnviarPedido(event){
        event.preventDefault();

        const url = 'http://localhost/movelaria/src/componentes/json/recebepedido.php';
        const dads = new FormData(event.target);
        const cabecalho = {
            method: "POST",
            body:dads,
            
        };
        const resp = await fetch(url,cabecalho);

        await resp;
        this.setState({
            redirect: true
          })
    };

    render(){
        if(this.state.redirect) {
            return <Redirect to="/Finalizando" />
          }
          else {
            return(
                <div className="conteudo_comprar d-flex justify-content-center text-center">
                        
                    <div className="esquerda_comprar col-5  mr-5 ml-3">
                        <div>
                            <h3 className="mt-3">Informações sobre produto</h3>
                            <div className="col-12 col-sm-10 col-md-5 mx-auto ">
                                <img src={require(`../../armarios/${this.props.imagem}`).default} alt="Foto não carregou" className="mt-5" width="100%"/>
                            </div>
                            <div className="d-flex mt-4 justify-content-center">
                                <div className="mr-5">
                                    <p>Descrição:</p>
                                    <p>{this.props.descricao}</p>
                                </div>
                                <div className="ml-5">
                                    <p>Valor unitario:</p>
                                    <p id="valor">R$ {this.props.preco}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="direita_comprar col-5 ml-5 mr-3 d-flex-column justify-content-center">
                        <h3 className="mt-3">Preencha os dados para envio</h3> 
                        <form className="mt-5 " onSubmit={this.EnviarPedido}>
                            <div className="form-group row ">
                            
                                <label forhtml="nome" className="col-sm-4 col-form-label">Digite seu nome: </label>
                                <div className="col-sm-6">
                                    <input type="text" name="nome" id="nome" className="form-control"/>  
                                </div>   
                            </div>
                            <div className="form-group row">
                                <label forhtml="ende" className="col-sm-4 col-form-label">Endereço para entrega: </label>
                                <div className="col-sm-6">
                                    <input type="text" name="ende" id="ende" className="form-control"/>
                                </div>  
                            </div>
                            <div className="form-group row">
                                <label forhtml="tel" className="col-sm-4 col-form-label">Telefone para contato: </label>
                                <div className="col-sm-6">
                                    <input type="tel" name="tele" id="tele" maxLength="11" className="form-control"/> 
                                </div>  
                            </div>
                            <div className="form-group row">
                                <label forhtml="qts" className="col-sm-4 col-form-label">Qts:</label>
                                <div className="col-sm-6">
                                    <input type="number" name="qts" id="qts" min="1" defaultValue="1" maxLength="2" className="form-control"/> 
                                </div>     
                            </div>  
                            <input type="hidden" name="produto" defaultValue={this.props.id}/>    
                            

                            <button className="btn btn-outline-success mt-5" type="submit">Finalizar compra</button>
                        </form>
                    </div>
                </div>
            )

        }

    }
}