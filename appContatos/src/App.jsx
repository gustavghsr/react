import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ListaContatos from "./pages/ListaContatos"
import Formulario from "./pages/Formulario"


export default function App(){

  //criar a estrutura de rotas de navegação

  return(
    <Router>
      <div className="container pt-3">
        
        <nav className="text-center">
          <Link to="/" className="btn btn-outline-secondary btn-sm">Lista Contatos</Link>
          <Link to="/formulario" className="btn btn-outline-secondary btn-sm">Formulário</Link>
        </nav>


        <Routes>
          <Route path="/" element={<ListaContatos/>} />
          <Route path="/formulario" element={<Formulario/>} />
        </Routes>

      </div>
    </Router>
  )
}
 




