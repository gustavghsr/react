import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Catálogo de Contatos</Link>

                <div className="navbar-nav">
                        <Link className="nav-link" to="/">Listar</Link>
                        <Link className="nav-link" to="/novo">Novo Contato</Link>
                </div>

            </div>
        </nav>
    )
}