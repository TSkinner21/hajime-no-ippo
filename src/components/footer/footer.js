import React from "react";
import Logo from "../../assets/logo.jpg"
import './footer.css'

function Footer() {
    return (
        <footer>
        <img id="logo" src={Logo}/>
        <span>Todos direitos reservados ©</span>
        <span>Desenvolvido por: João Flores</span>
  
        <nav className="footer-navigation">
            <ul className="footer-list">
                <a href="index2.html">
                    <li>Página Principal</li>
                </a>
                <a href="ingressos.html">
                    <li>Ingressos</li>
                </a>
                <a href="Localidades.html">
                    <li>Localidades</li>
                </a>
                <a href="./fotos.html">
                    <li>Fotos</li>
                </a>
            </ul>
        </nav>
</footer>
    )
}



export default Footer