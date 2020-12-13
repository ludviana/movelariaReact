import React from 'react';
import Comentarios from './comentarios';
import email from '../../armarios/email2.png'
import whats from '../../armarios/whats.png'

class Contato extends React.Component{
    constructor(){
        super()

        this.state ={
            comentarios:[]
        };

        this.EnviarComentario = this.EnviarComentario.bind(this);
    };

    componentDidMount(){
        fetch('http://18.229.150.67/selectcoment.php')
        .then( comenta => comenta.json())
        .then( comenta => this.setState({'comentarios': comenta}));

    }




    componentDidUpdate(){
        if(this.EnviarComentario){

            fetch('http://18.229.150.67/selectcoment.php')
            .then( comenta => comenta.json())
            .then( comenta => this.setState({'comentarios': comenta}));
        }
    }

    async EnviarComentario(evento){
        evento.preventDefault();

        const url = 'http://18.229.150.67/recebecoment.php';
        const dados = new FormData(evento.target);
        const cabecalho = {
            method: "POST",
            body: dados,
        };

        const resposta = await fetch(url,cabecalho);
        
        await resposta.json();
        

    }


    render(){

        
        return(
            <div>
                <div className="container-fluid text-center">
                    <section className="d-flex  mb-5">
                        <div className="col-6">
                            <figure>
                                <img src={email} alt="email" width="40px"/>

                                <figcaption>
                                    <h3> email@fullstack.com</h3>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-6">
                            <figure>
                                <img src={whats} alt="telefone" width="40px"/>

                                <figcaption>
                                    <h3 className="numero">(11)1111-2222</h3>
                                </figcaption>
                            </figure> 
                        </div>
                    </section>
                
                    <div className="container col-8 mx-auto">
                        <main>
                            <h2>Fale conosco</h2>
                            <form onSubmit={this.EnviarComentario} >
                            
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="nome" >Nome:</label>
                                            <input type="text" name="nome" id="nome" placeholder="Seu nome" className="form-control"/>
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="emaile">Email: </label>
                                            <input type="email" name="emaile" id="emaile" placeholder="email@fullstack.com" className="form-control"/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <legend className="col-form-label ">Genero:</legend>
                                    
                                        <input type="radio" name="genero" id="genero" value="Feminino" />
                                            <label htmlFor="genero" className="ml-2 mr-3">
                                                Feminino
                                            </label>
                            
                                        <input type="radio" name="genero" id="genero" value="Masculino" />
                                            <label  htmlFor="genero" className="ml-2 mr-3">
                                                Masculino
                                            </label>        
                                    
                                        <input type="radio" name="genero" id="genero" value="Outro" />
                                            <label htmlFor="genero" className="ml-2 mr-3">
                                                Outro
                                            </label>
                                            
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="telefone" className="col-form-label">Telefone: </label>
                                            <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" className=" form-control"/>
                                    </div>
                                </div>    
                                    
                                
                                <div className="form-group">
                                    <label className=" col-form-label" htmlFor="tipomensagem">Tipo de mensagem: </label>
                                    <select name="tipomensagem" id="tipomensagem" className="form-control">
                                        <option value=""> </option>
                                        <option value="Elogio">Elogio</option>
                                        <option value="Informação"> Informação</option>
                                        <option value="Reclamação">Reclamação</option>
                                        <option value="Sugestão">Sugestão</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="mensagem">Mensagem: </label>
                                        <textarea className="form-control" name="mensagem" id="mensagem" placeholder=" Deixe-nos sua mensagem aqui"></textarea>
                                </div>
                                
                                
                                <div>
                                    <input className="btn btn-primary mb-5" type="submit" value="Enviar"/> 
                                </div>
                            </form>
                        </main>
                    </div>
                </div>

                {this.state.comentarios.map(coment => (
                    <Comentarios key={coment.id_comentarios} id={coment.id_comentarios} nome={coment.nome} tipo={coment.tipo} mensagem={coment.mensagem}/>
                ))}
            </div>
        );
    };
};

export default Contato;