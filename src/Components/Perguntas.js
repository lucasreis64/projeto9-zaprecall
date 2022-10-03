import React, {useState} from "react"
import styled from "styled-components"
import {animations} from "../Auxiliares/animations.js"
import Botoes from "./Botoes"
import decks from "../Auxiliares/decks"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import indefinido from "../assets/img/icone_indefinido.png"
import ReactCardFlip from "react-card-flip";
const {variarQuatroVezes, variarSeisVezes, deslizarEsquerda, rolarCair} = animations
const verde = "#2FBE34", amarelo = "#FF922E", vermelho = "#FF3030"/* , cinza = "#333333" */
let simbolosArray;
let progresso = 0, acerto = 0
let round = 1;
export default function Perguntas({iconesFooter, progressoTotal, deck, setAcertos}) {
    const deckEscolhido = decks[deck]
    if (round === 1){
        simbolosArray = deckEscolhido.map((d)=>"")
        simbolosArray = simbolosArray.map(s=><img src={indefinido} alt=""/>)
        round++;
    }
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
    const perguntaFechada = <PerguntaFechada abrir={false}><p>Pergunta {numeroPergunta}</p><img 
    onClick={()=>abrirPergunta()} src={seta} alt=""></img></PerguntaFechada>
    const [caixaPergunta,setCaixaPergunta] = useState(perguntaFechada)
    
    function fecharPergunta (color) {
        setCaixaPergunta(<PerguntaAberta anime={true} fechar={true}><p>{resposta}</p> <Botoes/></PerguntaAberta>)
        enviarResposta(color)
    }
    function abrirPergunta () {
        setCaixaPergunta(<PerguntaFechada abrir={true}><p>Pergunta {numeroPergunta}</p><img 
        onClick={()=>abrirPergunta()} src={seta} alt=""></img></PerguntaFechada>)
        setTimeout(()=>setCaixaPergunta(<PerguntaAbertaDiv pergunta={pergunta} resposta={resposta} fecharPergunta={fecharPergunta}></PerguntaAbertaDiv>), 1500)
    }

    progressoTotal(deckEscolhido.length, progresso)

    function enviarResposta (cor) {    
        if (cor==='vermelho'){
            setTimeout(()=>setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={vermelho}><p>Pergunta {numeroPergunta}</p><img
            src={erro} alt=""></img></PerguntaFechada>), 1500) 
            construirArrayIcons(erro)
        }
        if (cor==='amarelo'){
            setTimeout(()=>setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={amarelo}><p>Pergunta {numeroPergunta}</p><img
            src={quase} alt=""></img></PerguntaFechada>), 1500)
            acerto = acerto + 1
            setAcertos(acerto)
            construirArrayIcons(quase)
        }
        if (cor==='verde') {
            setTimeout(()=>setCaixaPergunta(<PerguntaFechada close={true} riscado={true} cor={verde}><p>Pergunta {numeroPergunta}</p><img
            src={certo} alt=""></img></PerguntaFechada>), 1500)
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

function PerguntaAbertaDiv ({pergunta, resposta, fecharPergunta}) {
    const [flip, setFlip] = useState(false)
    return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <PerguntaAberta fechar={false} anime={true}><p>{pergunta}</p><img onClick={()=>setFlip(!flip)} src={virar} alt=""></img></PerguntaAberta>
        <PerguntaAberta fechar={false}><p>{resposta}</p> <Botoes fecharPergunta={fecharPergunta}/></PerguntaAberta>
    </ReactCardFlip>)
}
let tempoMs = 400;
function tempo() {
    tempoMs+=200
    return tempoMs+'ms'
}




const ContainerPerguntas=styled.div`
    margin-top: 120px;
`

const Img = styled.img`
    animation: ${variarSeisVezes} 500ms;
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
    animation: ${props=>props.abrir? rolarCair : deslizarEsquerda} ${props=>props.close? '500ms' : (props.abrir?'1500ms':tempo)};

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
    animation: ${props=>props.anime? (props.fechar?rolarCair : variarQuatroVezes): 'none'} ${props=>props.anime? (props.fechar?'1500ms':'500ms'): 'none'};

    p{
        margin-bottom: 10px;
    }

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

