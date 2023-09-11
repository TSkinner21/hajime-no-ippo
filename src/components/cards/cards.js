import React from "react"
import "./cards.css"
import Button from "./button"
import { useState } from "react"

function Cards(){

    function evento() {
        const boxers = document.querySelectorAll(".card");
        for (const boxer of boxers) {
            boxer.classList.add("slide")
        }
            
    }
    /*    const cardsSlide = [
            {},
            {transform: "translateX(-100%)"}
        ];

        const cardsTiming = {
            duration:500,
        }

    function evento() {
        match.animate(cardsSlide, cardsTiming)    
        const matchSlideKeyframes = new KeyframeEffect(document.getElementsByClassName("card") [
            {transform: "translateX(0%)"},
            {transform: "translateX(100%)"}, {
            duration: 10, fill: "forwards"
            }
        ]);
    } */

    return (
        <div className="characters-card-container">
        <div className="cards-content">
            <div className="card banner-1">Makunouchi Ippo</div>
            <div className="card banner-2">Mamoru Takamura</div>
            <div className="card banner-3">Ichiro Miyata</div>
            <div className="card banner-4">Tatsuya Kimura</div>
            <div className="card banner-5">Mamoru Takamura</div>
            <div className="card banner-6">Ichiro Miyata</div>
        </div>
        <Button onClick={() => evento()}/>
        </div>
        )
}

export default Cards