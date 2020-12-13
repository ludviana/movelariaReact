import React from 'react';
import Informacoes from './Informacoes'
import '../../css/comprar.css';

class Pedido extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            dados:[],
            
        }
    };

    componentDidMount(){  
        fetch(`https://testando.ddns.net/selectpedido.php?produto=${this.props.match.params.idprod}` )
        .then( resposta => resposta.json())
        .then(resposta => this.setState({'dados': resposta})); 
    }


    render(){ 
        return(
            <div>
                {this.state.dados.map(item =>(
                    <Informacoes key={item.idProduto} id={item.idProduto} imagem={item.imagem} descricao={item.descricao} preco={item.precoProduto}/>
                ))}
            </div>
        ) 
    };
};

export default Pedido;