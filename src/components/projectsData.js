import ghostlab from "../assets/projeto1.jpeg";
import ghostlab2 from "../assets/ghostlab2.png"
import agendaBarbearia from "../assets/agendaBarbearia.png"
import agendaBarbearia2 from "../assets/agendaBarbearia2.png"
import agendaBarbearia3 from "../assets/agendaBarbearia3.png"
import agendaBarbearia4 from "../assets/agendaBarbearia4.png"


const projects = [
    {
        img: [ghostlab, ghostlab2],
        title: "GhostLab",
        description: "Projeto de um estúdio musical onde os usuários podem explorar os serviços oferecidos, ouvir beats disponíveis para venda e, por meio de um painel administrativo, adicionar, editar e remover beats",
        descriptionModal: "Teste descrição Modal",
        tecs: ['React', 'Tailwind', 'FastApi', 'PostgreSql']
    },
    {
        img: [agendaBarbearia, agendaBarbearia2, agendaBarbearia3, agendaBarbearia4],
        title: "Agenda Barbearia",
        description: "Agende seu horário com facilidade — escolha o serviço, data e hora, preencha seus dados e pronto! Gerencie tudo no painel administrativo.",
        descriptionModal: "Projeto simples de agendamento para barbearia, onde o cliente escolhe o serviço (corte, barba ou corte e barba), data e horário, preenche nome e telefone e confirma o agendamento. Conta também com painel administrativo para adicionar, editar e remover serviços.",
        tecs: ['React', 'Tailwind', 'FastApi', 'PostgreSql']
    }
]

export default projects