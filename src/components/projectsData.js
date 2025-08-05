import ghostlab from "../assets/projeto1.jpeg";
import ghostlab2 from "../assets/ghostlab2.png"
import agendaBarbearia from "../assets/agendaBarbearia.png"
import agendaBarbearia2 from "../assets/agendaBarbearia2.png"
import agendaBarbearia3 from "../assets/agendaBarbearia3.png"
import agendaBarbearia4 from "../assets/agendaBarbearia4.png"
import eugenio from "../assets/eugenio.png"
import eugenio2 from "../assets/eugenio2.png"
import eugenio3 from "../assets/eugenio3.png"
import eugenio4 from "../assets/eugenio4.png"
import eugenio5 from "../assets/eugenio5.png"
import eugenio6 from "../assets/eugenio6.png"
import corteFacil from "../assets/corteFacil/corteFacil.png"
import corteFacil2 from "../assets/corteFacil/corteFacil2.png"
import corteFacil3 from "../assets/corteFacil/corteFacil3.png"
import corteFacil4 from "../assets/corteFacil/corteFacil4.png"
import corteFacil5 from "../assets/corteFacil/corteFacil5.png"
import corteFacil6 from "../assets/corteFacil/corteFacil6.png"
import corteFacil7 from "../assets/corteFacil/corteFacil7.png"
import corteFacil8 from "../assets/corteFacil/corteFacil8.png"

const projects = [
    {
        img: [eugenio, eugenio2, eugenio3, eugenio4, eugenio5, eugenio6],
        title: "Eugenio Engenharia",
        description: "Este projeto visa criar uma landing page moderna e eficaz para a Eugenio Engenharia, uma empresa líder em soluções de segurança do trabalho. O principal objetivo é gerar novos leads qualificados e consolidar a presença online da empresa.",
        descriptionModal: "Este projeto visa o desenvolvimento de uma landing page para a Eugenio Engenharia, com o objetivo de capturar leads qualificados. A página terá um design responsivo e profissional, destacando os serviços da empresa e utilizando chamadas para ação (CTAs) claras e um formulário de contato. A estrutura será otimizada com técnicas de SEO para garantir visibilidade nos motores de busca, atraindo tráfego orgânico e convertendo visitantes em potenciais clientes.",
        tecs: ['React', "Tailwind", "Typescript"],
        deploy : "https://www.eugenioengenharia.com.br/",
        git: "https://github.com/Matdev6/AstroEugenioEngenharia"
    },
    {
        img: [corteFacil, corteFacil2, corteFacil3, corteFacil4, corteFacil5, corteFacil6, corteFacil7, corteFacil8],
        title: "Corte Facil",
        description: "Agende seu horário com facilidade — escolha o serviço, data e hora, preencha seus dados e pronto! Gerencie tudo no painel administrativo.",
        descriptionModal: "Projeto de agendamento para barbearia, onde o cliente escolhe o serviço (corte, barba ou corte e barba), data e horário, preenche nome e telefone e confirma o agendamento. Conta também com painel administrativo onde podemos consultar os agendamentos e configurar os serviço e horario de funcionamento de acordo com a necessidade de co cliente.",
        tecs: ['React', 'Tailwind', 'Node', 'PostgreSql', 'Docker'],
        deploy: 'https://corte-facil-byup.vercel.app/',
        git : 'https://github.com/Matdev6/CorteFacil'
    },
    {
        img: [ghostlab, ghostlab2],
        title: "GhostLab",
        description: "Projeto de um estúdio musical onde os usuários podem explorar os serviços oferecidos, ouvir beats disponíveis para venda e, por meio de um painel administrativo, adicionar, editar e remover beats",
        descriptionModal: "Teste descrição Modal",
        tecs: ['React', 'Tailwind', 'FastApi', 'PostgreSql'],
        deploy : '',
        git: ''
    },

]

export default projects