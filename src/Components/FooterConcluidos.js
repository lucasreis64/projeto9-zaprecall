import styled from "styled-components"

export default function FooterConcluidos() {
    const verde = "#2FBE34", amarelo = "#FF922E", vermelho = "#FF3030"/* , cinza = "#333333" */

    return (
        <>
            <FooterConcluidosDiv>
                <ContainerBotoes>
                    <Button cor={vermelho}>Não lembrei</Button>
                    <Button cor={amarelo}>Quase não lembrei</Button>
                    <Button cor={verde}>Zap!</Button>
                </ContainerBotoes>
                <h2>{0}/{4} CONCLUIDOS</h2>
            </FooterConcluidosDiv>
        </>
    )
};

const FooterConcluidosDiv = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
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