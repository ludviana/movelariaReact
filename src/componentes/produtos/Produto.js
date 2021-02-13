
import {Link} from 'react-router-dom';

import React from 'react';


export default class Produto extends React.Component{
    render(){
        return(     
            <div className="produto" id={this.props.categoria}>
                <figure>
                    <Link to={{pathname:`/Pedido${this.props.a}`}} ><img src={require(`../../armarios/${this.props.imagem}`).default} alt={this.props.descricao} title={this.props.descricao}/> </Link>
                </figure>
                <p className="mt-3"> {this.props.descricao}</p>
                <p className="vermelho ">R$ {this.props.preco}</p>
            </div>
        )
    }
};