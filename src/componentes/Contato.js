import React from 'react';
import email from '../armarios/email2.png'
import whats from '../armarios/whats.png'

class Contato extends React.Component{
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
                            <form action="../conexoes/conexao.php" method="post" >
                            
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
            </div>
        );
    };
};

export default Contato;