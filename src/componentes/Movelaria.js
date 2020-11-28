/*
Olá, Estudante!

Chegou a hora da entrega do seu projeto prático!

Você viu no decorrer da fase Cavaleiro Jedi que a entrega deste projeto seria única contemplando os conteúdos dos cursos de React Js, Bootstrap, PHP e Banco de Dados.

E para você não ficar perdido no caminho, vamos recapitular:

Em React.Js a tarefa foi a realização de um refactory (refatoração) do front-end do seu projeto.

Já em Bootstrap, você precisou implementar no seu refactory (feito no curso anterior) pelo menos uma lista, estilizada com as classes de listas do Bootstrap.

E em PHP, os dados da lista deveriam ser retornados pelo PHP em formato JSON, para alimentação e uso no React Js.

Agora, nesta última etapa os dados da lista devem ser originários de JOIN de pelo menos 2 tabelas.

*/




import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './Menu';
import Footer from './Footer';
import Main from './Main';
import Sobre from './Sobre';
import Contato from './Contato';
import Produtos from './Produtos';




class Movelaria extends React.Component{
    render(){
        return(
            <div >
                <Menu />
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/Sobre' component={Sobre} />
                    <Route path='/Contato' component={Contato} />
                    <Route path='/Produtos' component={Produtos} />
                    
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Movelaria;
