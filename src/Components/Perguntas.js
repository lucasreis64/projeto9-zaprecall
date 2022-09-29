import React, {useState} from "react"
import styled from "styled-components"
import Botoes from "./Botoes"
import decks from "../Auxiliares/decks"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import certo from "../assets/img/icone_certo.png"
import quase from "../assets/img/icone_quase.png"
import indefinido from "../assets/img/icone_indefinido.png"

const verde = "#2FBE34", amarelo = "#FF922E", vermelho = "#FF3030"/* , cinza = "#333333" */
let simbolosArray = ['','','','','','','','']
simbolosArray = simbolosArray.map(s=><img src={indefinido} alt=""/>)
let progresso = 0, acertos=0;
export default function Perguntas({iconesFooter, progressoTotal, deck, setAcertos}) {
    const deckEscolhido = decks[deck]
    console.log(deck)
    const perguntasMap = deckEscolhido.map((d, idx)=><Pergunta key={idx} iconesFooter={iconesFooter} progressoTotal={progressoTotal} deckEscolhido={deckEscolhido}
    pergunta={d.pergunta} resposta={d.resposta} idx={idx} setAcertos={setAcertos}/>)
    return (
        <>
            {perguntasMap}
        </>
    )
};


function Pergunta ({pergunta, resposta, idx, iconesFooter, progressoTotal, deckEscolhido, setAcertos}) {
    const numeroPergunta = idx+1
    const questionamento = <PerguntaAberta><p>{resposta}</p> <Botoes enviarResposta={enviarResposta}/></PerguntaAberta>
    const perguntaAberta = (<PerguntaAberta><p>{pergunta}</p><img onClick={()=>setCaixaPergunta(questionamento)} src={virar} alt=""></img></PerguntaAberta>)
    const perguntaFechada = <PerguntaFechada><p>Pergunta {numeroPergunta}</p><img onClick={()=>setCaixaPergunta(perguntaAberta)} src={seta} alt=""></img></PerguntaFechada>
    const [caixaPergunta,setCaixaPergunta] = useState(perguntaFechada)
    

    progressoTotal(deckEscolhido.length, progresso)

    function enviarResposta (cor) {    
        if (cor==='vermelho'){
            setCaixaPergunta(<PerguntaFechada riscado={true} cor={vermelho}><p>Pergunta {numeroPergunta}</p><img
            src={erro} alt=""></img></PerguntaFechada>); 
            construirArrayIcons(erro)
        }
        if (cor==='amarelo'){
            setCaixaPergunta(<PerguntaFechada riscado={true} cor={amarelo}><p>Pergunta {numeroPergunta}</p><img
            src={quase} alt=""></img></PerguntaFechada>)
            construirArrayIcons(quase)
        }
        if (cor==='verde') {
            setCaixaPergunta(<PerguntaFechada riscado={true} cor={verde}><p>Pergunta {numeroPergunta}</p><img
            src={certo} alt=""></img></PerguntaFechada>)
            setAcertos(acertos++)
            construirArrayIcons(certo)
        }
    }

    function construirArrayIcons(img){
        progresso++
        simbolosArray[idx]=<img src={img} alt=""/>
        iconesFooter(simbolosArray)
    }

    return (
        <>
            {caixaPergunta}
        </>
    )
}


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

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

