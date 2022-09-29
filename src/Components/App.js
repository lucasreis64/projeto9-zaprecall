import styled from "styled-components"
import React, {useState} from "react"
import logo from "../assets/img/logo.png"
import FooterConcluidos from "./FooterConcluidos"
import Perguntas from "./Perguntas.js"
import GlobalStyle from './GlobalStyles';
import BoasVindas from "./BoasVindas"

export default function App() {
    const [arrayIcones, setArrayIcones] = useState ([])
    const [progressoState, setProgresso] = useState ([])
    const [totalState, setTotal] = useState ([])

    function iconesFooter(array){
        setArrayIcones(array)
    }

    function progressoTotal(total, progresso){
        setProgresso(progresso)
        setTotal(total)
    }

    return (
        <>
            <GlobalStyle/>
            <BoasVindas/>
            <ScreenContainer>
                <LogoContainer>
                    <img src={logo} alt = ""/>
                    <h1>ZapRecall</h1>
                </LogoContainer>
                <Perguntas iconesFooter={iconesFooter} progressoTotal={progressoTotal}></Perguntas>
                <FooterConcluidos arrayIcones={arrayIcones} total={totalState} progresso={progressoState}></FooterConcluidos>
            </ScreenContainer>
        </>
    )
}

const ScreenContainer = styled.div`

    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
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
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`
