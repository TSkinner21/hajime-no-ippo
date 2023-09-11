import React, { useContext, useEffect } from "react";
import './header.css';
import { useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg"


function Header (){

   /*  const navigate = useNavigate();

    const active = true;
    useEffect(() => {
        if (active) {
            navigate('ingressos')
        } else {
            navigate('localidades')
        }
    }) */

    return (
        <>
        <header>
        <img id="logo" src={logo}></img>
            <nav>
                <ul>
                    <Link to={'/'}>
                    <li>Página Principal</li>
                    </Link>
                    <Link to={'/ingressos'}>
                    <li>Ingressos</li>
                    </Link>
                    <Link to={'/localidades'}>
                    <li>Localidades</li>
                    </Link>
                    <Link to={'/galeria'}>
                    <li>Galeria</li>
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;