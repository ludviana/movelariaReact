import { useState, useEffect } from 'react';
import Produto from './Produto';
import '../../css/produtos.css';

export default function SelecionaProduto(props){
const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            
            const resposta = await fetch('http://localhost:3501/todos_produtos')
    
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return(  
        <div className="principal row">
                {produtos.produtos && produtos.produtos.map(item =>  (
                   

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