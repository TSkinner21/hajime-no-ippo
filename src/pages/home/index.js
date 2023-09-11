import React  from "react";
import Header from "../../components/header/header";
import Button from '../../components/button/button'
import "./myindex.css"
import Trailer from "../../assets/trailer-video.mp4"
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/ingressos');


    return (
        <>
        <Header />
        <div id="banner"> </div>
        <div id="video-container">
            <div className="content">
                <video controls className="video">
                    <source src={Trailer}/>
                    Seu, navegador não possui suporte para este vídeo.
                </video> 
                <div id="sinopse">
                    <p className="descricao">
                        Ippo Makunouchi tem 16 anos, mas nunca faz coisas da sua idade. Seus dias consistem 
                        em ajudar sua mãe na loja de aluguel de barcos de pescaria e estudar. 
                        Certo dia, Ippo apanha de uns garotos que o cercam 
                        a caminho de casa, mas é salvo por um grande lutador de Boxe.
                        Fato que mudaria sua vida por completo, dando inicio à uma jornada maravilhosa.
                    </p>
                <Button onClick={handleClick}/>
                </div>
            </div>
        </div>
        <Cards />
        <Footer />
        </>
    )
}

export default Home