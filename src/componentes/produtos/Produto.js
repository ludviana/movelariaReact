import {Link} from 'react-router-dom';
import Pedido from './Pedido';


export default function Produto(props){

    const Pegaid = (evento) =>{
        evento.preventDefault();

        const click = evento.target.value

        console.log(click);

        <Pedido oi={click} />

    }

    return(
        <div className="produto" id={props.nome}>
            <figure>
                <img src={require(`../../armarios/${props.imagem}`).default} alt={props.descricao} title={props.descricao}/> 
            </figure>
            <p className="mt-3"> {props.descricao}</p>
            <p className="vermelho ">R$ {props.preco}</p>
            <Link to='/Pedido'><button className="btn btn-primary mb-5 mt-3" value={props.a} onClick={Pegaid} >Comprar</button></Link>
        </div>
        
    );  
};

//variant="info" type="submit"
//<button className="btn btn-primary mb-5 mt-3" onClick={Envia} value={props.a}>Comprar</button>