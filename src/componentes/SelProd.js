import { useState, useEffect } from 'react';
import Produto from './Produto';
import '../css/produtos.css';

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

    let cate = [];
    let descr = [];
    let idPre = [];
    let idPro = [];
    let imagem = [];
    let nome = [];
    let preco = [];



    {produtos && produtos.map(item =>
        (cate.push(item.nomecategoria))
        )}

    {produtos.map(item =>
        descr.push(item.descricao)
        )}

    {produtos.map(item =>
        idPre.push(item.idPrecos)
        )}
    
    {produtos.map(item =>
        idPro.push(item.idProduto)
        )}

    {produtos.map(item =>
        imagem.push(item.imagem)
        )}

    {produtos.map(item =>
        nome.push(item.nome)
        )}

    {produtos.map(item =>
        preco.push(item.precoProduto)
        )}

let row = [];

if(produtos.length > 0){ 
    
        for(let i = 0 ; i < idPro.length ; i++){
            row.push(
            <Produto
                
                key={idPro[i]} 
                a = {idPro[i]}
                imagem={imagem[i]} 
                nome={nome[i]} 
                preco={preco[i]} 
                categoria={cate[i]} 
                descricao={descr[i]}
            />
            
            )
        }
    }
    
    return( 
        
            <div className="principal">
                {row}
            </div>
        
        );
}


