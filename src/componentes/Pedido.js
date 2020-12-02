import React from 'react';

/*
Novo plano de ataque....

ao clicar no botao é enviado um metodo get que enviara o numero do produto para ser tratado no php
aqui sera retornado um json com o select do produto!

*/


class Pedido extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            id: this.props.id
        };
    };
    
    render(){
        
        return(
            <div>
               <p>ata  {this.state.id}</p>
            </div>
        );
    };
};

export default Pedido;