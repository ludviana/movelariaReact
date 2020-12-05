import { Redirect } from 'react-router';
import Pedido from './Pedido';
import React from 'react';


export default class Produto extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            redirect: false
        }
    
        this.Pegaid = this.Pegaid.bind(this);
    }

    Pegaid = () =>{

        this.setState({
            redirect: true
        })

    }

    render(){
        
        if(this.state.redirect){
            return(
                <div>
                    <Pedido oi={this.props.a} />
                    <Redirect to="/Pedido"/>
                </div>
            )
        }else{
            return(

                
                <div className="produto" id={this.props.nome}>
                   
                    <figure>
                        <img src={require(`../../armarios/${this.props.imagem}`).default} alt={this.props.descricao} title={this.props.descricao}/> 
                    </figure>
                    <p className="mt-3"> {this.props.descricao}</p>
                    <p className="vermelho ">R$ {this.props.preco}</p>
                    <button className="btn btn-primary mb-5 mt-3" value={this.props.a} onClick={this.Pegaid} >Comprar</button>
                </div>
            )
        }
    }

};