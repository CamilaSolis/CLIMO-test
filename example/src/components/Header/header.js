import React from 'react';
import './header.scss';

const Header = () => {
        return(
            <div className='header'>
                <div className='header--container'>
                    <div className='header--logo'>
                        <img src='https://i.imgur.com/c4B3NsY.png' ></img>
                    </div>
                    <div className='header--menu'>
                        <ul>
                            <li><a>INICIO</a></li>
                            <li><a>PLANES</a></li>
                            <li><a>HOGAR</a></li>
                            <li><a>EMPRESAS</a></li>
                            <li><a>COTIZA</a></li>
                            <li><a>POR QUÉ CLIMO</a></li>
                            <li><a>BLOG</a></li>
                            <li><a>CONTACTO</a></li>
                            <li><a>MICLIMO</a></li>
                        </ul>
                        <p>Ventas: +56 2 3229 5836 / +56 9 4599 5732</p>
                    </div>
                </div>
            </div>
        )
    }

export default Header