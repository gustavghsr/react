import { useEffect, useState } from "react"
import api from "../services/api"
import { Link } from "react-router-dom"

export default function ListaContatos() {

    const [contatos, setContatos] = useState([])

    useEffect(() => {
        carregarDados()
    }, [])

    const carregarDados = async () => {
        const resposta = await api.get("/contatos")
        setContatos(resposta.data)
    }

    async function deletar(id){
        if (window.confirm("Quer deletar?")) {
            await api.delete(`/contatos/${id}`)
        }
        carregarDados()
    }

    return (
        <div className="container card p-0 mt-5">
            <div className="card-header text-center">
                <h4>Lista de Contatos</h4>
            </div>

            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>WhatsApp</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                        {contatos.map((contato) => (
                            <tr key={contato.id}>
                                <td>{contato.nome}</td>
                                <td>{contato.whatsapp}</td>
                                <td>{contato.email}</td>
                                <td>
                                    <div className="btn-group">
                                         <Link className="btn btn-sm btn-primary me-2" to={`/editar/${contato.id}`}>Editar</Link>
                                          
                                        <button className="btn btn-sm btn-danger me-2" onClick={() => deletar(contato.id)}>Excluir</button>

                                    </div>
                                </td>
                            </tr>

                        ))}
                    <tbody >

                    </tbody>
                </table>
            </div>

        </div>
    )
}