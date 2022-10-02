import React, {useState} from "react"
import styled, {keyframes} from "styled-components"
import Botoes from "./Botoes"
import decks from "../Auxiliares/decks"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import indefinido from "../assets/img/icone_indefinido.png"
import ReactCardFlip from "react-card-flip";

const verde = "#2FBE34", amarelo = "#FF922E", vermelho = "#FF3030"/* , cinza = "#333333" */
let simbolosArray = ['','','','','','','','']
simbolosArray = simbolosArray.map(s=><img src={indefinido} alt=""/>)
let progresso = 0, acerto = 0
export default function Perguntas({iconesFooter, progressoTotal, deck, setAcertos}) {
    const deckEscolhido = decks[deck]
    console.log(deck)
    const perguntasMap = deckEscolhido.map((d, idx)=><Pergunta key={idx} setAcertos={setAcertos} iconesFooter={iconesFooter} progressoTotal={progressoTotal} deckEscolhido={deckEscolhido}
    pergunta={d.pergunta} resposta={d.resposta} idx={idx}/>)
    return (
        <ContainerPerguntas>
            {perguntasMap}
        </ContainerPerguntas>
    )
};


function Pergunta ({pergunta, resposta, idx, iconesFooter, progressoTotal, deckEscolhido, setAcertos}) {    
    const numeroPergunta = idx+1
    const perguntaFechada = <PerguntaFechada><p>Pergunta {numeroPergunta}</p><img 
    onClick={()=>setCaixaPergunta(<PerguntaAbertaDiv pergunta={pergunta} resposta={resposta} enviarResposta={enviarResposta}></PerguntaAbertaDiv>)} src={seta} alt=""></img></PerguntaFechada>
    const [caixaPergunta,setCaixaPergunta] = useState(perguntaFechada)
    
    

    progressoTotal(deckEscolhido.length, progresso)

    function enviarResposta (cor) {    
        if (cor==='vermelho'){
            setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={vermelho}><p>Pergunta {numeroPergunta}</p><img
            src={erro} alt=""></img></PerguntaFechada>); 
            construirArrayIcons(erro)
        }
        if (cor==='amarelo'){
            setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={amarelo}><p>Pergunta {numeroPergunta}</p><img
            src={quase} alt=""></img></PerguntaFechada>)
            acerto = acerto + 1
            setAcertos(acerto)
            construirArrayIcons(quase)
        }
        if (cor==='verde') {
            setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={verde}><p>Pergunta {numeroPergunta}</p><img
            src={certo} alt=""></img></PerguntaFechada>)
            acerto = acerto + 1
            setAcertos(acerto)
            construirArrayIcons(certo)
        }
    }

    function construirArrayIcons(img){
        progresso++
        simbolosArray[idx]=<Img src={img} alt=""/>
        iconesFooter(simbolosArray)
    }

    return (
        <>
            {caixaPergunta}
        </>
    )
}

function PerguntaAbertaDiv ({pergunta, resposta, enviarResposta}) {
    const [flip, setFlip] = useState(false)
    return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <PerguntaAberta anime={true}><p>{pergunta}</p><img onClick={()=>setFlip(!flip)} src={virar} alt=""></img></PerguntaAberta>
        <PerguntaAberta><p>{resposta}</p> <Botoes enviarResposta={enviarResposta}/></PerguntaAberta>
    </ReactCardFlip>)
}
let tempoMs = 400;
function tempo() {
    tempoMs+=200
    return tempoMs+'ms'
}

const mostrarPerguntas = keyframes`
    from{opacity:0; transform: translateX(-600px)}
    to{opacity:1; transform: translateX(-0px)}
`

const mostrarConteudoPergunta = keyframes`
    0% {
        transform: translateY(-20%);
        opacity: 0.2;
    }
    50% {
        transform: translateY(20%);
        opacity: 0.5;
    }
    75% {
        transform: translateY(-10%);
        opacity: 0.7;
    }
    100% {
        transform: translateY(10%);
        opacity: 1;
    }

`
const mostrarConteudoIcone = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0.2;
    }
    17% {
        transform: translateY(100%);
        opacity: 0.5;
    }
    34% {
        transform: translateY(-60%);
        opacity: 0.7;
    }
    51% {
        transform: translateY(60%);
        opacity: 1;
    }
    68%{
        transform: translateY(-30%);
        opacity: 1;
    }
    85%{
        transform: translateY(30%);
        opacity: 1;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }
`


const ContainerPerguntas=styled.div`
    margin-top: 120px;
`

const Img = styled.img`
    animation: ${mostrarConteudoIcone} 500ms;
`

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation: ${mostrarPerguntas} ${props=>props.close? '500ms' : tempo};

    p {
        text-decoration: ${props=>props.riscado?'line-through':'none'};
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color:  ${props=>props.cor};
    }
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: ${props=>props.anime? mostrarConteudoPergunta: 'none'} ${props=>props.anime? '500ms': 'none'};

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

