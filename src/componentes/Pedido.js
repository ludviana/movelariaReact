import React from 'react';
import '../css/comprar.css';
import Produto from './Produto';



class Pedido extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dados:[]
        }
        this.EnviarPedido = this.EnviarPedido.bind(this);
    };

  
    componentDidMount(){                    
        fetch('http://localhost/movelaria/src/componentes/json/envio.php?produto=4' )
        .then( resposta => resposta.json())
        .then(resposta => this.setState({'dados': resposta}));
                 
    }

    EnviarPedido(){
        console.log('fui')
    };

    
    render(){
        <Produto />

            return(

                
                <div>
                    {this.state.dados.map(item =>(

                        <div className="conteudo_comprar d-flex justify-content-center text-center">
                    
                            <div className="esquerda_comprar col-5  mr-5 ml-3">
                                <div>
                                    <h3 className="mt-3">Informações sobre produto</h3>
                                    <div className="col-12 col-sm-10 col-md-5 mx-auto ">
                                        <img src={require(`../armarios/${item.imagem}`).default} alt="Foto não carregou" className="mt-5" width="100%"/>
                                    </div>
                                    <div className="d-flex mt-4 justify-content-center">
                                        <div className="mr-5">
                                            <p>Descrição:</p>
                                            <p>{item.descricao}</p>
                                        </div>
                                        <div className="ml-5">
                                            <p>Valor unitario:</p>
                                            <p id="valor">R$ 2</p>
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
                                    

                                    <button className="btn btn-outline-success mt-5" type="submit">Finalizar compra</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            )
        
    };
};

export default Pedido;