const decks = [
    [
        {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __ ", resposta:"letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta:"expressões"},
        {pergunta: "O ReactDOM nos ajuda __", resposta:"interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __", resposta:"gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __", resposta:"passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __", resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ],
    [
        {pergunta: "Sarutobi Azuma foi morto por quem na temporada Shippuuden?", resposta: "Hidan"},
        {pergunta: "Naruto tinha laços muito fortes com Sasuke. Esses laços foram quebrados em qual Vale?", resposta: "Vale do Fim"},
        {pergunta: "Quem é a paixão de Hinata?", resposta: "Naruto"},
        {pergunta: "Quando Naruto e Sasuke brigaram, Naruto antes de perder a luta deixou algo na bandana de Sasuke, o que foi?", resposta: "Deixou um risco reto"},
        {pergunta: "Quem lutou e derrotou o Sasori?", resposta: "Sakura e Chiyo-baa"},
        {pergunta: "Gaara foi capturado por quais integrantes da Akatsuki?", resposta: "Sasori e Deidara"},
        {pergunta: "Qual é o nome da cobra do Orochimaru?", resposta: "Manda"},
        {pergunta: "Quem ensinou o rasengan para o Naruto?", resposta: "Jiraya"},
        {pergunta: "Naruto usa roupas de que cor na temporada Shippuuden?", resposta: "Laranja e preto"},
        {pergunta: "Sasuke, em busca de integrantes para seu novo time, decide convidar 3 pessoas. Quais os nomes dessas pessoas?", resposta: "Karin, Juugo e Suigetsu"}
    ],
    [
        {pergunta: "O que é placa bacteriana?", resposta: "A placa bacteriana ou biofilme é uma película transparente formada por bactérias e resíduos alimentares que se alojam sobre os dentes. Caso não seja removida diariamente através da escovação, pode causar gengivite e/ou doença periodontal."},
        {pergunta: "O que é gengivite?", resposta: "A gengivite é a infecção da gengiva, causada pela placa bacteriana ou biofilme, que se forma sobre os dentes quando a escovação é deficiente. Os sintomas da gengivite são:gengiva vermelha, inchada ou flácida; sensação de dor na gengiva; presença de sangue durante a escovação ou ao usar o fio dental; dentes moles; mau hálito e gosto ruim."},
        {pergunta: "O que é doença periodontal?", resposta: "A doença periodontal é uma infecção, causada por bactérias, que afeta os tecidos que envolvem os dentes. Além disso o osso vai sendo reabsolvido devido à infecção. Quando a gengiva se afasta dos dentes, forma a chamada bolsa periodontal, a qual favorece o acúmulo de resíduos alimentares e bactérias. A doença periodontal é a pricipal causadora da perda de dentes em adultos."},
        {pergunta: "O que é sensibilidade dentária?", resposta: "A sensibilidade dentária é em geral, causada pela perda do esmalte, presença de cáries, retração gengival, durante tratamentos de clareamento dental, entre outros. Quando alimentos quentes, frios ou com alto teor de acidez são ingeridos, causam dor e incômodo."},
        {pergunta: "A doença periodontal pode acarretar outros tipos de doença?", resposta: "Perder um ou mais dentes acarreta diversos problemas que desequilibram todo o sistema bucal, atrapalhando a mastigação, fonação, estética, perda de mais dentes, cárie e/ou agravo nas doenças gengivais, propiciando a reabsorção óssea dos maxilares."},
        {pergunta: "Doença periodontal tem cura?", resposta: "São entidades crônicas que não são passíveis de cura, mas somente de um controle. Entretanto, ambas as formas de terapia periodontal (cirúrgica e não cirúrgica) são efetivas em paralisar o processo infeccioso."}
    ],
    [
        {pergunta: "O que são doenças autoimunes?", resposta: "Doença em que sistema imunológico do corpo ataca células saudáveis. Ocorre pelo mau funcionamento do sistema imunológico, que é responsável por defender o nosso organismo de elementos estranhos, como vírus e bactérias."},
        {pergunta: "O que é imunidade inata?", resposta: "É considerada a primeira linha de defesa do organismo.Resposta primária,rápida e inespecífica, pronta para atacar a qualquer momeno."},
        {pergunta: "O que é imunidade adaptativa?", resposta: "Tem os linfócitos T e B como principais células de defesa, desenvolvida após contato com vários antígenos imunogênicos."},
        {pergunta: "O que é resposta imune humoral?", resposta: "Uma resposta de defesa em que dominam os anticorpos, que são constituídos pelos linfócitos B. Os anticorpos são responsáveis pelo reconhecimento dos antígenos e por eliminá-los."},
        {pergunta: "Quais são os órgãos do sistema imunológico?", resposta: "Timo, baço, linfonodos, medula óssea, vasos linfáticos, entre outros. São divididos em primários e secundários. No primeiro, ocorre a linfopoese que diz respeito a constituição de linfócitos. No segundo, por sua vez, é gerado a resposta imune."}
    ],
    [
        {pergunta: "O que é atrofia?", resposta: "É um termo que descreve a diminuição de tecido celular. Em uma escala maior, a atrofia pode ser uma redução no tamanho e na função de um músculo ou membro. Este processo pode ser muitas vezes gradual e crônico e até mesmo permanente."},
        {pergunta: "O que é hipertrofia?", resposta: "É o aumento do tamanho de um órgão como consequência do aumento das funções celulares. A hipertrofia mais comum é a muscular, podendo ser provocada por fatores biológicos como: crescimento na fase de puberdade, dilatação do útero durante a gravidez e etc."},
        {pergunta: "O que é hiperplasia?", resposta: "É a proliferação de células em tecidos e órgãos que podem aumentar de volume. Em algumas ocasiões é sintoma de que algo não vai bem com o organismo do paciente.Isso porque esse aumento no volume de células pode ser estimulado por uma desrregulação de hormônios, fazendo com que tecidos cresçam em lugares errados ou com que órgãos aumentem de tamanho de forma desnecessária."},
        {pergunta: "O que é metaplasia?", resposta: "É uma alteração reversível de um tipo celular para outro tipo, em resposta a um estímulo estressante. Mudança de células para uma forma que normalmente não ocorre no tecido em que se encontra."}
    ]
]

export default decks

