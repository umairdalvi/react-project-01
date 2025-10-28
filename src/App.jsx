import Header from "./components/Header"
import Hero from "./components/Hero"
import "../src/App.css"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Industries from "./components/Industries"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Industries />
    </div>
  )
}

export default App