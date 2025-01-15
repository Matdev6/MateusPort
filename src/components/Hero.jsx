export default function Hero() {
    
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    return (
        <>
            <section className="altura-tela mt-20 scroll-mt-20 w-screen bg-primary flex  relative " id="section1">
                <div className="m-auto h-4/5 w-4/5  flex flex-col bg-secundary">
                    <div className="mx-auto">
                    <h1 className="mx-auto mt-10 text-4xl font-semibold text-white uppercase">Seja bem vindo ao meu portfolio!</h1>
                    <p className="mx-auto">Sou o Mateus Bernardo ou MatDev tenho {anoAtual - 2005} anos </p>
                    </div>
                </div>   
            </section>
        </>
    )
}