import { useState } from "react"


function ListItem({tarefa}){

    const [tarefaConcluida, setTarefaConcluida] = useState(tarefa)

    function finalizarTarefa() {

        setTarefaConcluida(tarefaConcluida, tarefa)
    }

    return(
        <div>

            <button onClick={finalizarTarefa}>Tarefa concluida</button>

        </div>
    )
}

export default ListItem