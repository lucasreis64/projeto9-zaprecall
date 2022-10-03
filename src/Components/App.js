import styled from "styled-components"
import React, {useState} from "react"
import {animations} from "../Auxiliares/animations.js"
import logo from "../assets/img/logo.png"
import FooterConcluidos from "./FooterConcluidos"
import Perguntas from "./Perguntas.js"
import GlobalStyle from './GlobalStyles';
import BoasVindas from "./BoasVindas"
import casa from "../assets/img/casa.png"
const {trovao, opacidade, tremerZoom} = animations
export default function App() {
    const [arrayIcones, setArrayIcones] = useState ([])
    const [progressoState, setProgresso] = useState ([])
    const [totalState, setTotal] = useState ([])
    const [iniciar, setIniciar] = useState (false)
    const [deck, setDeck] = useState ('')
    const [meta, setMeta] = useState ('')
    const [acertos, setAcertos] = useState (0)

    function iconesFooter(array){
        setArrayIcones(array)
    }

    function progressoTotal(total, progresso){
        setProgresso(progresso)
        setTotal(total)
    }

    function deckEscolhido(deckParam){
        setDeck(deckParam)
    }

    return (
        <>
            <GlobalStyle/>
            <BoasVindas setIniciar={setIniciar} setMeta={setMeta} deckEscolhido={deckEscolhido}/>
            {
            iniciar?
            <ScreenContainer>
                <Home><img onClick={()=>window.location.reload()} src={casa} alt=""/></Home>
                <LogoContainer>
                    <img src={logo} alt = ""/>
                    <h1>ZapRecall</h1>
                </LogoContainer>
                <Perguntas setAcertos={setAcertos} deck={deck} iconesFooter={iconesFooter} progressoTotal={progressoTotal}></Perguntas>
                <FooterConcluidos iniciar={iniciar} acertos={acertos} meta={meta} arrayIcones={arrayIcones} total={totalState} progresso={progressoState}></FooterConcluidos>
            </ScreenContainer>
            : true
            }
        </>
    )
}

const Home=styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    img{
        margin-bottom: 3px;
        width: 30px;
        height: 30px;
    }
`

const ScreenContainer = styled.div`

    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 120px;
    animation: ${opacidade} 1s;
    .logo-container img {
        width: 52px;
    }

    h1 {
        font-family: 'Righteous' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
        animation: ${tremerZoom} ${'500ms'} 1 ${'1000ms'};
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0 20px 0;
    position: fixed;
    background-color: #FB6B6B;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    font-size: 36px;
    img{
        animation: ${trovao} 300ms infinite;
        height: 60px;
    }
`
