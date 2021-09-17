import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"

export default function Homepage(){

    const history = useHistory()

    const toOrderForm = () => {
        history.push('/pizza')
    }
    
    
    return (
        <div className="hero-container">
            <h1>Lambda Eats, SON</h1>
            <button id="order-pizza" onClick={toOrderForm}>Order Pizza</button>
        </div>
    )
}