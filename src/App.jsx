import Header from "./components/Header"
import Hero from "./components/Hero"
import "../src/App.css"
import Clients from "./components/Clients"
import Services from "./components/Services"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Services />
    </div>
  )
}

export default App