import {keyframes} from "styled-components";

export const animations = {
    deslizarEsquerda: keyframes`
    from{opacity:0; transform: translateX(-600px)}
    to{opacity:1; transform: translateX(-0px)}
    `
    ,
    variarQuatroVezes: keyframes`
    0% {
        transform: translateY(-20%);
        opacity: 0.2;
    }
    25% {
        transform: translateY(20%);
        opacity: 0.5;
    }
    50% {
        transform: translateY(-10%);
        opacity: 0.7;
    }
    75% {
        transform: translateY(10%);
        opacity: 1;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }`
    ,
    variarSeisVezes: keyframes`
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
    }`
    ,
    trovao: keyframes`
        from{filter: brightness(0.7);}
        to{filter: brightness(1);}
    `
    ,
    deslizarCima: keyframes`
        from{opacity:0;transform: translateY(-600px)}
        to{opacity:1;transform: translateY(0px)}
    `
}

