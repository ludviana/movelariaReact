import React from 'react';
import '../css/index.css';
import email from '../armarios/email2.png';
import whats from '../armarios/whats.png';


class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="container-fluid mt-5 footer">
                    <div className="d-flex justify-content-center ">
                        <div className="col-4 col-sm text-center">
                            <p className="b">Contato</p>
                            <div>
                                <p><img src={email} alt="email" width="40px" /> email@fullstack.com</p>
                            </div>
                            <div>
                                <p><img src={whats} alt="telefone" width="40px" /> (11)1111-2222</p>
                            </div>
                        </div>
                        <div className="col-4 col-sm text-center">     
                            <p className="b">Lojas</p>  
                            <p> Rua das Acacias,1993 - Jardim Novo Mundo - SP</p>
                            <p className="mt-5">Rua Pau Brasil,1993 - Jardim Horizonte - MT</p>
                        </div>
                        <div className="col-4 col-sm text-center" >
                            <p className="b">Horarios</p>
                            <p > Horario de funcionamento: Das 8:00 às 18:00hrs.</p>                 
                            <p className=" mt-5">Finais de semana: Das 10:00 às 17:00hrs</p>
                        </div>
                    </div>
                </footer>
                       
                <section className="criado">
                    <h3>Site Criado por</h3>
                    <h2>Lucas Damasceno Viana Alves - SPM </h2>
                </section>       
            </div>
        );
    };
};

export default Footer;