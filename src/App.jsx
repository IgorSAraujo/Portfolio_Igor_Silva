import { useState, useEffect } from "react"
import "./styles/globalStyles.scss"
import "./styles/typography.scss"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"

function App() {
  const [toogleMode, setToogleMode] = useState(false)

  const applyTheme = (isLightMode) => {
    const html = document.querySelector("html")
    if (isLightMode) {
      html.classList.add("light-mode")
    } else {
      html.classList.remove("light-mode")
    }
  }
  const toggleTheme = () => {
    const newToggleMode = !toogleMode
    setToogleMode(newToggleMode)
    applyTheme(newToggleMode)
    localStorage.setItem("@IgorAraujo:Light-Mode", newToggleMode)
  }

  useEffect(() => {
    const savedTheme = JSON.parse(
      localStorage.getItem("@IgorAraujo:Light-Mode")
    )
    if (savedTheme !== null) {
      setToogleMode(savedTheme)
      applyTheme(savedTheme)
    }
  }, [])

  return (
    <>
      <Header toogleMode={toogleMode} toggleTheme={toggleTheme} />
      <Main />
      <Footer />
    </>
  )
}

export default App
