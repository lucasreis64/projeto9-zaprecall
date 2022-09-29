import styled from "styled-components";
import logo from "../assets/img/logo.png"
import React, {useState} from "react"

export default function BoasVindas() {
    const [iniciarApp, setIniciarApp] = useState(false)
    return (
        <TelaInicial iniciarApp={iniciarApp}>
            <img src={logo} alt=""/>
            <h1>ZapRecall</h1>
            <select>
                <option value="" disabled selected>Selecione um deck:</option>
                <option value="React">React</option>
            </select>
            <button onClick={()=>setIniciarApp(true)}>Iniciar Recall!</button>
        </TelaInicial>
    )
}

const TelaInicial = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: ${props=>props.iniciarApp?'none':'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-family: Righteous;
    background-color: #FB6B6B;
    z-index: 3;
    font-weight: 400;
    font-size: 36px;
    color: white;

    img{
        width: 136px;
        height: 161px;
    }

    button{
        width: 246px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #D70900;
    }

    select{
        width: 246px;
        height: 43px;
        background: #FFFFFF;
        border-radius: 5px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ADADAD;
    }
    option{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: Black;
    }
`