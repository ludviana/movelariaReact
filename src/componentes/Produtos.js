import { useState, useEffect } from 'react';
import Produto from './Produto';
import '../css/produtos.css';
import pagamento from '../armarios/logo pagamento.jpg';
import Lateral from './Lateral';


export default function Produtos(){
    
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch('http://localhost/movelaria/src/componentes/json/jason.php')
    
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return(
        <div>
            <section className="conteudo">
                <div className="lateral">
                    {produtos && produtos.map(des =>  
                        <Lateral key={des.idProduto} categoria={des.categoria}/>
                    )}
                </div>
                <div className="principal">
                    {produtos && produtos.map(item => 
                    
                    <Produto
                    key={item.idProduto} 
                    imagem={item.imagem} 
                    nome={item.nome} 
                    preco={item.preco} 
                    categoria={item.categoria} 
                    descricao={item.descricao}/>)} 
                </div>
            
            </section>

            <div className="pagamento mt-5">
                <h4>Formas de pagamento: </h4>
                <figure>
                    <img src={pagamento} alt="Formas de pagamento"/>
                </figure>
            </div>          
        </div>
    );

};