
import {Link} from 'react-router-dom';

import React from 'react';


export default class Produto extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false,
        }
    }

        render(){
            return(  
                <div className="produto" id={this.props.nome}>
                   
                    <figure>
                        <img src={require(`../../armarios/${this.props.imagem}`).default} alt={this.props.descricao} title={this.props.descricao}/> 
                    </figure>
                    <p className="mt-3"> {this.props.descricao}</p>
                    <p className="vermelho ">R$ {this.props.preco}</p>
                    <Link to={{pathname:`/Pedido/${this.props.a}`}} className="btn btn-primary mb-5 mt-3">Pedido</Link>
                </div>
            )
        }


};