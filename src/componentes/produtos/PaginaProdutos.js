import '../../css/produtos.css';
import tempo from '../../armarios/tempo.svg'
import pagamento from '../../armarios/logo pagamento.jpg';
import { lazy, Suspense } from 'react'

const SelecionaProduto = lazy(() => import('./SelProd'))
const Lateral = lazy(() => import('./Lateral'))

export default function Produtos(){

    return(
        <div className="container-fluid">
            
            <section className="row">
                
                <div className="mb-5 col-xs-5 col-sm-10 col-md-3 lateral">

                    <Suspense fallback={<img src={tempo} alt="Carregando..."/>
                    }>
                    
                        <Lateral />
                    </Suspense>
                </div>
                <div className=" col-sm-12 col-md-9 ">

                    <Suspense fallback={<img src={tempo} alt="Carregando..." />}> 
                        <SelecionaProduto/>
                    </Suspense>
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