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
                                <img src={email} width="40px"/>

                                <figcaption>
                                    <h3> email@fullstack.com</h3>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-6">
                            <figure>
                                <img src={whats} width="40px"/>

                                <figcaption>
                                    <h3 className="numero">(11)1111-2222</h3>
                                </figcaption>
                            </figure> 
                        </div>
                    </section>
                
                    <div>
                        <main>
                            <h2>Fale conosco</h2>
                            <form action="../conexoes/conexao.php" method="post" >
                            
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="nome" >Nome:</label>
                                            <input type="text" name="nome" id="nome" placeholder="Seu nome" class="form-control"/>
                                    </div>    
                                    <div class="form-group col-md-6">
                                        <label for="emaile">Email: </label>
                                            <input type="email" name="emaile" id="emaile" placeholder="email@fullstack.com" class="form-control"/>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <legend class="col-form-label ">Genero:</legend>
                                    
                                        <input type="radio" name="genero" id="genero" value="Feminino" />
                                            <label for="genero" className="ml-2 mr-3">
                                                Feminino
                                            </label>
                            
                                        <input type="radio" name="genero" id="genero" value="Masculino" />
                                            <label  for="genero" className="ml-2 mr-3">
                                                Masculino
                                            </label>        
                                    
                                        <input type="radio" name="genero" id="genero" value="Outro" />
                                            <label for="genero" className="ml-2 mr-3">
                                                Outro
                                            </label>
                                            
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="telefone" class="col-form-label">Telefone: </label>
                                            <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" class=" form-control"/>
                                    </div>
                                </div>    
                                    
                                
                                <div class="form-group">
                                    <label class=" col-form-label" for="tipomensagem">Tipo de mensagem: </label>
                                    <select name="tipomensagem" id="tipomensagem" class="form-control">
                                        <option value=""> </option>
                                        <option value="Elogio">Elogio</option>
                                        <option value="Informação"> Informação</option>
                                        <option value="Reclamação">Reclamação</option>
                                        <option value="Sugestão">Sugestão</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="mensagem">Mensagem: </label>
                                        <textarea class="form-control" name="mensagem" id="mensagem" placeholder=" Deixe-nos sua mensagem aqui"></textarea>
                                </div>
                                
                                
                                <div>
                                    <input class="btn btn-primary mb-5" type="submit" value="Enviar"/> 
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