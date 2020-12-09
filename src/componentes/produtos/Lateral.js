import React from 'react';

class Lateral extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            categorias :'',
            recebe: []            
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

    componentDidMount(){
        fetch('http://localhost/movelaria/src/componentes/json/categoria.php')
        .then(recebido => recebido.json())
        .then(recebido => this.setState({'recebe':recebido}));
    }


    render(){
        
        const estilo = {
            backgroundColor: 'rgba(128, 128, 128, 0.596)'
        }
        return(
            
            <ul className="list-group ">
                <li className="list-group-item active" ><h3>Produtos</h3></li>
                <li className="list-group-item list-group-item-action" style={estilo} id="" onClick={this.Verifica}>Todos</li>

                {this.state.recebe.map(cats => (
                        
                    <li key={cats.idCategoria} className="list-group-item list-group-item-action" id={cats.nomecategoria} onClick={this.Verifica} style={estilo} >{cats.nomecategoria}</li>
                    
                ))}
            </ul>
        
        );
    }

}

export default Lateral;
