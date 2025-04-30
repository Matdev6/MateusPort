import { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      console.log("Página carregada!")
      setIsLoaded(true)
    }

    // Se a página já estiver carregada
    if (document.readyState === "complete") {
      setIsLoaded(true)
    } else {
      window.addEventListener("load", handleLoad)
    }

    return () => {
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
          <span className="text-lg">Carregando...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track">
      <Header />
      <Home />
    </div>
  )
}

export default App
