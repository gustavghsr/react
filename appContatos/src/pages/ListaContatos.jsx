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


     const deletar = async (id) => {
        if(id){
            await api.delete(`/contatos/${id}`)
        }
        carregarContatos()
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
                        </tr>

                    </thead>
                        {contatos.map((contatos) => (
                            <tr key={contatos.id}>
                                <td>{contatos.nome}</td>
                                <td>{contatos.whatsapp}</td>
                                <td>{contatos.email}</td>
                                <td>
                                    <div className="btn-group">
                                         <Link className="btn btn-sm btn-primary me-2" to={`/editar/${contatos.id}`}>Editar</Link>
                                          
                                        <button className="btn btn-sm btn-danger me-2">Excluir</button>

                                        <button className="btn btn- sm btn-warning">Ordenar</button>
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