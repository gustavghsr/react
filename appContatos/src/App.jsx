import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import ListaContatos from "./pages/ListaContatos";
import Formulario from "./pages/Formulario";
import Menu from './pages/menu'



function App(){

  //criar a estrutura de rotas de navegação

  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<ListaContatos />}></Route>
          <Route path="/novo" element={<Formulario />}></Route>
          <Route path="/editar/:id" element={<Formulario />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
 
export default App




