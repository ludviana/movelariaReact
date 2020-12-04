import React from 'react';
import {Link} from 'react-router-dom';
import '../../css/index.css';
import logo from '../../armarios/logo Movelaria Fullstack-01.png';



class Menu extends React.Component{
    render(){
        return(
            <div className="container-fluid mb-5 fundoMenu">
                <nav className="navbar navbar-expand-md">

                    <Link className="navbar-brand text-white" to="/"><img src={logo} alt="logo" width="180px"/></Link>

                    <button className="navbar-toggler bordinha" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        
                            <li className="nav-item">
                                <Link className="nav-link text-white ml-5" to="./PaginaProdutos">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ml-5" to="./Sobre">Sobre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ml-5" to="./Contato">Contato</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        );
    };

};

export default Menu;