import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
import Footer from './Footer';
import Main from './Main';
import Sobre from './Sobre';
import Contato from './Contato';
import Produtos from './PaginaProdutos';
import Pedido from './Pedido';




class Movelaria extends React.Component{
    render(){
        return(
            <div >
                <Menu />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/Sobre' component={Sobre} />
                    <Route path='/Contato' component={Contato} />
                    <Route path='/PaginaProdutos' component={Produtos} />
                    <Route path='/Pedido' component={Pedido}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Movelaria;
