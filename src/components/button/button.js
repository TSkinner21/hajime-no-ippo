import React from "react";
import './butsty.css'

function Button({onClick}){
    return (
        <button onClick={onClick} className="buttn">
            Comprar Ingressos
        </button>
    )
}

export default Button;