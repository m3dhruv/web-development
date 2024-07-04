import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Card title="card 1" desc="card 1"  />  
      <Card title="card 2" desc="card 2"  />  
      <Card title="card 3" desc="card 3"  />  
      <Card title="card 4" desc="card 4"  />  
    </div>
    </>
  )
}

export default App
