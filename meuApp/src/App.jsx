import TarefasSimples from "./pages/TarefasSiples";
import TarefasComStatus from "./pages/TarefasComStatus";
import { BrowserRouker as Router, Routes, Route, Link } from "react-router-dom"

export default function App(){

  //criar a estrutura de rotas de navegação

  return(
    <Router>
      <div>
        
        <nav>
          <Link to="/"> Tarefas Simples </Link>
          <Link to="/status"> Tarefas com Status</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples/>} />
          <Route path="/status" element={<TarefasComStatus/>} />
        </Routes>

      </div>
    </Router>
  )
}

