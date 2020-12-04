import React from 'react';
import Informacoes from './Infopedido'
import '../../css/comprar.css';

class Pedido extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            dados:[],
            id: this.props.oi
        }
        
    };

  
    componentDidMount(){                    
        fetch('http://localhost/movelaria/src/componentes/json/selectpedido.php?produto=4' )
        .then( resposta => resposta.json())
        .then(resposta => this.setState({'dados': resposta}));
                 
    }

    render(){

        return(
            <div>

                <p>{this.props.oi}</p>
                {this.state.dados.map(item =>(
                    <Informacoes key={item.idProduto} imagem={item.imagem} descricao={item.descricao} preco={item.precoProduto}/>
                ))}
            </div>
        )
        
    };
};

export default Pedido;