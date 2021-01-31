import React from 'react';
import Compra from './Compra'

export default class Finalizando extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            final: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3501/jsonpedido')
        .then(resp => resp.json())
        .then(resp => this.setState({'final': resp.pedido}))
    }


    render(){
        return(
            <div>
                {this.state.final.map(item => (
                    <Compra key={item.idPedido} id={item.idPedido} nome={item.nomeCliente} endereco={item.endereco} telefone={item.telefone} quantidade={item.quantidade} descricao={item.descricao} imagem={item.imagem} preco={item.precoProduto}/>

                ))}
            </div>
        )
    }

}