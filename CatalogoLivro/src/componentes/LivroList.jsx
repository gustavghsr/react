import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import api from "../services/api"

export default function LivroList() {
    //armazenar a lista de livros
    const [livros, setLivros] = useState([])

    //sera executado quando a pagina for carregada
    useEffect(() => {
        carregarLivros()
    }, [])

    //função para buscar a lista de livros do backend
    const carregarLivros = async () => {
        const resposta = await api.get("/livros")
        setLivros(resposta.data)
    }

    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Livros no catálogo</h4>
            </div>

            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Páginas</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>

                    <tbody>
                        {livros.map((livro) => (
                            <tr Key= {livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.paginas}</td>
                                <td>{livro.categoria}</td>
                                <td>{livro.descricao}</td>
                                <td>
                                    <div className="btn-group">
                                        <Link className="btn btn-sm btn-primary me-2" to={`/editar/${livro.id}`}>
                                        Editar
                                        </Link>
                                        
                                        <button className="btn btn-sm btn-danger">
                                        Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>
    )
}