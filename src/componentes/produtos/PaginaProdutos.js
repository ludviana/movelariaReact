import '../../css/produtos.css';
import pagamento from '../../armarios/logo pagamento.jpg';
import Lateral from './Lateral';
import SelecionaProduto from './SelProd';

export default function Produtos(){

    return(
        <div>
            <section className="conteudo">
                
                <div className="lateral">
                    <Lateral />
                </div>

                <SelecionaProduto/>

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