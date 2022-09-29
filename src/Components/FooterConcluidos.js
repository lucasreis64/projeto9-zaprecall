import styled from "styled-components"

export default function FooterConcluidos({arrayIcones, total, progresso, meta, acertos}) {
    acertos = acertos + 1
    /* function mensagemMeta () {
        if (progresso===meta) {
            if (acertos)
        }
        
    } */
    return (
        <>
            <FooterConcluidosDiv margin={arrayIcones.length}>
                <h2>{progresso}/{total} CONCLUIDOS</h2>
                <IconesFooter margin={arrayIcones.length}>{arrayIcones.map((a)=>a)}</IconesFooter>
                
            </FooterConcluidosDiv>
            
        </>
    )
};

const IconesFooter = styled.div`
    margin-top: ${props=>props.margin>0?'10px':'0px'};
    display: flex;
    gap: 5px;
`


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
    height: 70px;
    padding: ${props=>props.margin>0?'20px':'0px'};
`

