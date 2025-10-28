import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";
import { MaskedInput } from "react-maskara"

export default function LivroForm() {
    const [nome, setNome] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");

    // Recupera o id da URL
    const { id } = useParams();
    // Hook para navegação programática
    const navigate = useNavigate();

    //leitura dos dados para edição 
    useEffect(() => {
        if (id) {
            api.get(`/contatos/${id}`)
                .then((resposta) => {
                    setNome(resposta.data.nome)
                    setWhatsapp(resposta.data.whatsapp)
                    setEmail(resposta.data.email)
                })
        }
    }, [id])

    // salvar os dados
    const salvar = async (e) => {
        //desativa o comportamento padrão do navegador
        e.preventDefault()

        // cria o objeto com os dados do formuário
        const dados = { nome, whatsapp, email }

        //envia o objeto para o back end pelo método post (criar)
        if (id) {
            await api.put(`/contatos/${id}`, dados)
        } else {
            await api.post("/contatos", dados)
        }
        //redireciona o usuário para a rota principal (listagem de livros)
        navigate("/")
    }

    return (
        <div className="container card p-0 mt-5" style={{ maxWidth: "500px" }}>
            <div className="card-header">
                <h5>{id ? "Editar Livro" : "Novo Livro"}</h5>
            </div>
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label className="form-label">Nome:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">WhatsApp:</label>
                            <MaskedInput
                                mask="(99) 99999-9999"
                                id="whatsapp"
                                name="whatsapp"
                                className="form-control"
                                type="tel"
                                placeholder="(99) 99999-9999"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">E-mail:</label>
                            <input type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <button type="submit" onClick={salvar} className="btn btn-success">Salvar</button>
                    <Link className="btn btn-warning ms-2" to={`/`}>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    );
}
