import { useState } from "react"

function CardAdicionar({adicionarTarefa}){

    const [texto, setTexto] = useState('')

    return(
        <div>

            <input type="text"
            placeholder="Adicione a tarefa"
            value={texto}
            onChange={(e) => {e.target.value}}/>

            <button onClick={adicionarTarefa}>Criar tarefa</button>

        </div>
    )
}

export default CardAdicionar