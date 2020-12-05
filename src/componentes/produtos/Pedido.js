import React from 'react';
import Informacoes from './Informacoes'
import '../../css/comprar.css';

class Pedido extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            dados:[],
            id: this.props.oi
            
        }

        this.Select = this.Select.bind(this);
        
    };

    async Select() {
        const resposta = await fetch(`http://localhost/movelaria/src/componentes/json/selectpedido.php?produto=3` )
        const dados = await resposta.json()
        this.setState({'dados': dados});

    }

  
    componentDidMount(){  
        this.Select()   
    }

    render(){
        
        
        console.log(this.state.id)
        
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