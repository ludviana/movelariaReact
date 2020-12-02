import React from 'react';

class Lateral extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            categorias :''
        }
        this.Categ = this.Categ.bind(this);
        this.Todos = this.Todos.bind(this);
        this.Verifica = this.Verifica.bind(this);
        
               
    }

    
    Categ(b){
        
        let product = window.document.getElementsByClassName("produto");
        //console.log(b)
        for(let i=0; i<product.length; i++){
            if(b.target.id === product[i].id){
                product[i].style = "display:block";
            } else{
                product[i].style = "display:none"; 
            }
        }
    };
    Todos(){
        let product = window.document.getElementsByClassName("produto");
        for(let i=0; i<product.length; i++){
            product[i].style = "display:block";
        }
    };

    Verifica(a){
        this.setState({categoria:''})
        this.setState({categoria:a.target.id})

        if(a.target.id){
            this.Categ(a)
        }else{
            this.Todos()
        }
        
        
    }


    render(){
        
        const estilo = {
            backgroundColor: 'rgba(128, 128, 128, 0.596)'
        }
        return(
            
            <ul className="list-group ">
                <li className="list-group-item active" ><h3>Produtos</h3></li>
                <li className="list-group-item list-group-item-action" style={estilo} id="" onClick={this.Verifica}>Todos</li>

                <li className="list-group-item list-group-item-action" id="guardaRoupa" onClick={this.Verifica} style={estilo} >Guarda-Roupas</li>

                <li className="list-group-item list-group-item-action" style={estilo} id="cozinha" onClick={this.Verifica}>Cozinhas</li>

                <li className="list-group-item list-group-item-action" style={estilo} id="painelTV" onClick={this.Verifica}>Painel-de-TV</li>

                <li className="list-group-item list-group-item-action" style={estilo} id="armarioAlto" onClick={this.Verifica}>Armario-Alto</li>

                <li className="list-group-item list-group-item-action" style={estilo} id="armarioPequeno" onClick={this.Verifica}>Armario-pequeno</li>
            </ul>
        
        );
    }

}

export default Lateral;
