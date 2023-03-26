import { useState } from "react"


function ListItem({tarefa, removerTarefa}){

    const [tarefaConcluida, setTarefaConcluida] = useState(tarefa)

    function finalizarTarefa() {

        setTarefaConcluida(tarefaConcluida, tarefa)
    }

    return(
        <div>

            <button onClick={finalizarTarefa}>Tarefa concluida</button>

            <button onClick={removerTarefa}>Remover</button>
        </div>
    )
}

export default ListItem