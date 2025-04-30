import Header from "./components/Header"
import Home from "./pages/Home"
import { useEffect, useState } from "react"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoaded = () => {
      setIsLoaded(true)
    }

    window.addEventListener('load', handleLoaded)

    return () => {
      window.removeEventListener('load', handleLoaded)
    }
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-xl">
        Carregando...
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
