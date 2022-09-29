import styled from "styled-components"

export default function Botoes({enviarResposta}) {
    const verde = "#2FBE34", amarelo = "#FF922E", vermelho = "#FF3030"/* , cinza = "#333333" */

    return (
        <ContainerBotoes>
            <Button onClick = {()=>enviarResposta('vermelho')} cor={vermelho}>Não lembrei</Button>
            <Button onClick = {()=>enviarResposta('amarelo')} cor={amarelo}>Quase não lembrei</Button>
            <Button onClick = {()=>enviarResposta('verde')} cor={verde}>Zap!</Button>
        </ContainerBotoes>
    )
}
    
const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`



const Button = styled.button`
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        background: ${props=>props.cor};
        border-radius: 5px;
        border: 1px solid ;
        padding:5px;
`
    