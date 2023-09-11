import React from "react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./galery.css"
import fototreino from "../../assets/Ippo_Catching_Leaves.webp"
import fototreino2 from "../../assets/galery2.jpg"
import fototreino3 from "../../assets/galery1.png"
import galeria4 from "../../assets/Ippo_unable_to_use_his_right.webp"
import galeria5 from "../../assets/ippotrain.jpg"
import galeria6 from "../../assets/ippoleaf.jpg"
import Button from "../../components/button/button"

function Galeria() {
    return(
        <>
        <Header/>
        <div id="background">
            <div id="galery">
                <img className="photos" src={fototreino}/>
                <img className="photos" src={galeria4}/>
                <img className="photos" src={fototreino2}/>
                <img className="photos" src={galeria5}/>  
                <img className="photos" src={fototreino3}/>
                <img className="photos" src={galeria6}/>
            </div>
        <Button/>
        </div>
        <Footer/>
        </>
    )
}

export default Galeria