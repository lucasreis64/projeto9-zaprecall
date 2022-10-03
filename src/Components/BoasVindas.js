import styled from "styled-components";
import {animations} from "../Auxiliares/animations.js"
import logo from "../assets/img/logo.png"
import React, {useState} from "react"
import decks from "../Auxiliares/decks"
import nomeDecks from "../Auxiliares/nomeDecks";
const {trovao, deslizarCima, tremerZoom} = animations

export default function BoasVindas({setIniciar, deckEscolhido, setMeta}) {
    const [iniciarApp, setIniciarApp] = useState(false)
    const [selectValue, setSelectValue] = useState('')
    const [selectValueMeta, setSelectValueMeta] = useState('')
    
    return (
        <TelaInicial iniciarApp={iniciarApp} selectValue={selectValue} selectValueMeta={selectValueMeta}>
            <img src={logo} alt=""/>
            <h1>ZapRecall</h1>
            <select className="um" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                <option value="" disabled selected>Selecione um deck:</option>
                {nomeDecks.map(({value, name},index)=><option key={index} value={value}>{name}</option>)}
            </select>
            <select className="dois" value={selectValueMeta} onChange={e => setSelectValueMeta(e.target.value)}>
                <option value="" disabled selected>Defina sua meta:</option>
                {(selectValue==='')?true:decks[selectValue].map((d,index)=><option value={index+1}>{index+1}</option>)}
            </select>
            
            {(selectValue===''||selectValueMeta==='')?<button disabled>Iniciar Recall!</button>:
            <button onClick={()=><>{setIniciarApp(true)}{setIniciar(true)}{deckEscolhido(selectValue)}{setMeta(Number(selectValueMeta))}</>}>Iniciar Recall!</button>}
        </TelaInicial>
    )
}

let tempoMs = 400;
function tempo() {
    tempoMs+=200
    return tempoMs+'ms'
}

const TelaInicial = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
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
    animation: ${deslizarCima} ${tempo};
    img{
        width: 136px;
        height: 161px;
        animation: ${deslizarCima} ${tempo}, ${trovao} 300ms infinite;
    }

    h1{
        animation: ${deslizarCima} ${tempo}, ${tremerZoom} ${'500ms'} 1 ${tempo};
    }

    .um{
        animation: ${deslizarCima} ${tempo};
    }

    .dois{
        animation: ${deslizarCima} ${tempo};
    }

    select{
        width: 246px;
        height: 43px;
        background: white;
        border-radius: 5px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ADADAD;
        outline: none;
    }

    button{
        width: 246px;
        height: 54px;
        background: ${props=>props.selectValue===''||props.selectValueMeta===''?'rgb(201, 201, 201)':'white'};
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #D70900;
        animation: ${deslizarCima} ${tempo};
    }

    
    option{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: Black;
    }
`