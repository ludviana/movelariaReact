import React from 'react';

class Compra extends React.Component{
    render(){
        return(
            <div className="container text-center ">

                <h2>Obrigado Por comprar conosco {this.props.nome}</h2>
                <h3>Seu produto chegará em até 7dias</h3>

                

                <h2 className="mt-5">Informaçoes da compra:</h2>

                <div  className="col-12 col-sm-10 col-md-5 mx-auto ">
                    <img className="mt-3" src={require(`../../armarios/${this.props.imagem}`).default} width="100%" alt="Erro de carregamento"/>
                </div>

                <h4 className="mt-3" >{this.props.descricao}</h4>
                
                <h4>R$ {this.props.preco}</h4>
                <h4>quantidade: {this.props.quantidade}</h4>

                <h3 className="mt-5"> preco total: R$ {this.props.preco * this.props.quantidade}</h3>
            </div>
        )
    }
}

export default Compra;