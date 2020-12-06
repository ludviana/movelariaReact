import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './fixos/Menu';
import Footer from './fixos/Footer';
import Main from './main/Main';
import Sobre from './sobre/Sobre';
import Contato from './contato/Contato';
import Produtos from './produtos/PaginaProdutos';
import Pedido from './produtos/Pedido';
import Finalizando from './produtos/Finalizando';



class Movelaria extends React.Component{
    render(){
        return(
            <div >
                <Menu />
                <Switch>
                    
                    <Route exact path='/' component={Main} />
                    <Route exact path='/Sobre' component={Sobre} />
                    <Route exact path='/Contato' component={Contato} />
                    <Route exact path='/PaginaProdutos' component={Produtos} />
                    <Route exact path='/Pedido:idprod' component={Pedido}/>
                    <Route exact path='/Finalizando' component={Finalizando}/>
                    
                </Switch>
                
                <Footer />
                
                        
            </div>
        )
    }
}

export default Movelaria;
