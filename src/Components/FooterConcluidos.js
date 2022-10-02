import styled from "styled-components"


export default function FooterConcluidos({arrayIcones, total, progresso, meta, acertos}) {
    
    return (
        <>
            <FooterConcluidosDiv margin={arrayIcones.length}>
                <h2>{progresso}/{total} CONCLUIDOS</h2>
                <IconesFooter margin={arrayIcones.length}>{arrayIcones.map((a)=>a)}</IconesFooter>
                {(progresso>0)?<MensagemMeta progresso={progresso} acertos={acertos} meta={meta} total={total}/>:true}
            </FooterConcluidosDiv>
            
        </>
    )
};

function MensagemMeta ({progresso, acertos, meta, total}) {
    console.log('progresso:', progresso, 'meta:', meta)
    if (progresso===total) {
        if (acertos<meta) {
            console.log('oi')
            return <p>Você não conseguiu bater sua meta... 😓</p>
        }
        if (acertos===meta) {
            console.log('oi')
            return <p>Você conseguiu bater sua meta! 🥳</p>
        }
        if (acertos>meta) {
            console.log('oi')
            return <p>Você ultrapassou sua meta! 😎</p>
        }
    }
    if (progresso<total) {

        if (acertos<meta) {
            console.log('oi')
            return <p>{(meta-acertos===1)?'Falta':'Faltam'} {meta-acertos} {(meta-acertos===1)?'acerto':'acertos'} para bater a meta! 😱</p>
        }
        if (acertos===meta) {
            console.log('oi')
            return <p>Você bateu sua meta com antecedência! 🥳</p>
        }
        if (acertos>meta) {
            console.log('oi')
            return <p>Você ultrapassou sua meta antes da hora! 😎</p>
        }
    }

}

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
    box-sizing: content-box;
    padding: ${props=>props.margin>0?'20px':'15px'};
    
    p{
        text-align: center;
        margin-top: 10px;
    }
`

