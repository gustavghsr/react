import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LivroList from './componentes/LivroList'
import LivroForm from './componentes/LivroForm'
import Menu from './componentes/Menu'

function App() {
  return (
    <BrowserRouter>
      <Menu />
        <Routes>
          <Route path="/" element={<LivroList />}></Route>
          <Route path="/novo" element={<LivroForm />}></Route>
          <Route path="/editar/id:" element={<LivroForm />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
