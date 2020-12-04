import {Link} from 'react-router-dom';



export default function Produto(props){

    return(
        <div className="produto" id={props.nome}>
            <figure>
                <img src={require(`../armarios/${props.imagem}`).default} alt={props.descricao} title={props.descricao}/> 
            </figure>
            <p className="mt-3"> {props.descricao}</p>
            <p className="vermelho ">R$ {props.preco}</p>
            <Link to='/Pedido'><button className="btn btn-primary mb-5 mt-3" >Comprar</button></Link>
        </div>
        
    );  
};

//variant="info" type="submit"
//<button className="btn btn-primary mb-5 mt-3" onClick={Envia} value={props.a}>Comprar</button>