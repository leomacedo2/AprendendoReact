import type { Cep } from "../types/Cep"
import api from "../services/api"
import { useState } from "react"

function App() {
    const [cep, setCep] = useState<string>("")
    const [endereco, setEndereco] = useState<Cep | null>(null)
    const [erro, setErro] = useState<string>("")

    async function buscarCep() {

        try {
            setErro("")
            const response = await api.get(`${cep}/json`)
            setEndereco(response.data)

        }
        catch {
            setErro("Cep inválido. Digite novamente!")
            setEndereco(null)
        }
    }
    return (
        <div>
            <h2>Buscador de CEP</h2>
            <input value={cep} 
            onChange={e => setCep(e.target.value)}
            placeholder="Digite um CEP"
            />
            <button onClick={buscarCep}>Consultar</button>

            {erro && <p style={{color:'red'}}>{erro}</p>}

            {endereco && (
                <div>
                    <h2>Estado: </h2><p>{endereco.uf}</p>
                    <h2>Cidade: </h2><p>{endereco.localidade}</p>
                    <h2>Bairro: </h2><p>{endereco.bairro}</p>
                    <h2>Rua: </h2><p>{endereco.logradouro}</p>
                </div>
            )}

        </div>
    )
}

export default App