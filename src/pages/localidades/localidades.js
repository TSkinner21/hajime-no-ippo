import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './local.css'
import Mapa from "../../assets/mapaN3d.png"

function Localidades() {
    return (
        <>
        <Header />
        <div id="background">
            <img id="map" src={Mapa}>
            </img>
                <div className="spot" id="tokyo1">
                    <div className="korakuen"> <p>Kōrakuen Hall (後楽園ホール Kōrakuen Hōru) é uma arena em Bunquiô, Tóquio, Japão, a qual sediou inumeras lutas de boxe e wrestling. Parte da Cúpula da Cidade de Tóquio, é uma das maiores atrações de Tóquio. Tem capacidade para aproximadamente 1800 pessoas. O ringue possui uma área de 1,85 metros quadrados.</p>
                    </div>
                </div>
                <div className="spot" id="tokyo2"></div>
                <div className="spot" id="tokyo3"></div>
        </div>
        <Footer />
        </>
    )
}

export default Localidades