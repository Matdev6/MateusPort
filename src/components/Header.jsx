import logo from "../assets/logo.jpg"

const Header = () => {
    return (
        <div>
            <header className="flex w-screen justify-around items-center  py-2 shadow-lg font-semibold bg-secundary h-20">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="h-14 rounded-lg" />
                    <h1 className="items-center font-semibold text-lg"></h1>
                </div>
                <div className="flex  justify-between w-1/3 text-white">
                    <a href="">Inicio</a>
                    <a href="">Sobre mim</a>
                    <a href="">Formacao</a>
                    <a href="">Projetos</a>
                    <a href="" className="">Contato</a>
                </div>
            </header>
        </div>
    )
}

export default Header