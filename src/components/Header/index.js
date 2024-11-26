import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
            <div className='header center'>
                <picture>
                    <img src='./assets/logo.png' alt='logo esportes' width= "250px"/>
                </picture>

                <nav>
                    <ul>
                        <li>
                            <a href='#'>Produtos</a>
                        </li>

                        <li>
                            <a href='#'>Sobre</a>
                        </li>

                        <li>
                            <a href='#'>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;