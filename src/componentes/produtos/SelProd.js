import { useState, useEffect } from 'react';
import Produto from './Produto';
import '../../css/produtos.css';

export default function SelecionaProduto(props){
const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch('http://localhost/movelaria/src/componentes/json/jasonprod.php')
    
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return(  
        
        <div className="principal">
            {produtos && produtos.map(item =>  (
                <Produto
                
                    key={item.idProduto} 
                    a = {item.idProduto}
                    imagem={item.imagem} 
                    nome={item.nome} 
                    preco={item.precoProduto} 
                    categoria={item.nomecategoria} 
                    descricao={item.descricao}
                />
            ))}
        </div>
    
    )
}