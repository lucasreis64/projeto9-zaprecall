import React, {useState} from "react"
import styled from "styled-components"

import Questions from "../Auxiliares/PerguntasObj"
import seta from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"


export default function Perguntas() {
    
    const perguntasMap = Questions.map((q, idx)=><Pergunta key={idx} pergunta={q.pergunta} resposta={q.resposta} idx={idx}/>)
    return (
        <>
            {perguntasMap}
        </>
    )
};


function Pergunta ({pergunta, resposta, idx}) {
    
    const numeroPergunta = idx+1
    const questionamento = <PerguntaAberta className="2"><p>{resposta}</p></PerguntaAberta>
    const perguntaAberta = (<PerguntaAberta className="1"><p>{pergunta}</p><img onClick={()=>setCaixaPergunta(questionamento)} src={virar} alt=""></img></PerguntaAberta>)
    const perguntaFechada = <PerguntaFechada className="3"><p>Pergunta {numeroPergunta}</p><img onClick={()=>setCaixaPergunta(perguntaAberta)} src={seta} alt=""></img></PerguntaFechada>
    const [caixaPergunta,setCaixaPergunta] = useState(perguntaFechada)

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
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
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

