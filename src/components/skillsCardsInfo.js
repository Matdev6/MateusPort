import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import postrgreSQL from "../assets/postgres.png"
import node from "../assets/node.png"
import docker from "../assets/docker.png"


const cards = [
        {
            img: html, // ou o import real
            title: "HTML",
            info: "Linguagem de marcação responsável por estruturar o conteúdo das páginas web. É a base de qualquer site.",
        },
        {
            img: css,
            title: "CSS",
            info: "Estiliza a aparência dos elementos HTML, permitindo criar layouts bonitos, responsivos e modernos.",
        },
        {
            img: js,
            title: "JavaScript",
            info: "Linguagem que adiciona interatividade às páginas, como animações, eventos e lógica dinâmica.",
        },
        {
            img: react,
            title: "React",
            info: "Biblioteca JavaScript focada em interfaces de usuário. Ideal para criar componentes reutilizáveis e SPA’s eficientes.",
        },
        {
            img: tailwind,
            title: "Tailwind",
            info: "Framework de utilitários CSS que acelera a criação de estilos com classes prontas, mantendo o código limpo e responsivo.",
        },
        {
            img: postrgreSQL,
            title: "PostgreSQL",
            info: "Banco de dados relacional poderoso, ideal para lidar com dados estruturados de forma segura e performática.",
        },
        {
            img: node,
            title: "FastApi",
            info: "Framework web para APIs em Python, focado em desempenho, tipagem e facilidade de uso com suporte ao async.",
        },
        {
            img: docker,
            title: "Docker",
            info: "Ferramenta que empacota aplicações em containers, garantindo que rodem da mesma forma em qualquer ambiente.",
        },
    ];

export default cards