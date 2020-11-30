import {categ,todos} from './Filtro';

export default function Lateral(){
    
    const estilo = {
        backgroundColor: 'rgba(128, 128, 128, 0.596)'
    }

    return(
        
        <ul className="list-group ">
            <li className="list-group-item active" ><h3>Produtos</h3></li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={todos()}>Todos</li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={categ('guardaRoupa')}>Guarda-Roupas</li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={categ('cozinha')}>Cozinhas</li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={categ('painelTV')}>Painel-de-TV</li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={categ('armarioAlto')}>Armario-Alto</li>
            <li className="list-group-item list-group-item-action" style={estilo} onClick={categ('armarioPequeno')}>Armario-pequeno</li>
        </ul>
    
    );
};



/* export default function Lateral(props){

    let a = props.categoria;
   // let b = a.split(" ");

    const b = [...new Set(a)]
    console.log(b)

    return(
        
        <div>
            <li>{b}</li>
        </div>
    );
};
*/