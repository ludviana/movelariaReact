import React from 'react';
import Informacoes from './Informacoes'
import '../../css/comprar.css';

class Pedido extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dados:[],
            id: ''
            
        }
        this.setState.id = this.props.oi
    };

  
    componentDidMount(){                    
        fetch(`http://localhost/movelaria/src/componentes/json/selectpedido.php?produto=3` )
        .then( resposta => resposta.json())
        .then(resposta => this.setState({'dados': resposta}));
                 
    }

    render(){

        return(
            <div>
                {this.props.oi}
                {this.state.dados.map(item =>(
                    <Informacoes key={item.idProduto} id={item.idProduto} imagem={item.imagem} descricao={item.descricao} preco={item.precoProduto}/>
                ))}
            </div>
        )
        
    };
};

export default Pedido;