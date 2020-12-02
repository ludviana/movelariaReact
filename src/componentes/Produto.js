import {Link} from 'react-router-dom';


export default function Produto(props){


    return(
        
        <div className="produto" id={props.nome}>
            <figure>
                <img src={require(`../armarios/${props.imagem}`).default} alt={props.descricao} title={props.descricao}/> 
            </figure>
            <p className="mt-3"> {props.descricao}</p>
            <p className="vermelho ">R$ {props.preco}</p>
            <Link to=""><button className="btn btn-primary mb-5 mt-3" variant="info" type="submit" id={props.a}  >Comprar</button></Link>
        </div>
        
    );  
};