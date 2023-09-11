import React from "react";
import './cards.css'

function Button({onClick}) {
    return (
        <div className="btn-space">
        <button onClick={onClick}></button>
        </div>
    )
}

export default Button