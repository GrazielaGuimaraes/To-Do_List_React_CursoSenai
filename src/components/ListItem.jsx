import { useState } from "react"


function ListItem({tarefa}){

    const [tarefaConcluida, setTarefaConcluida] = useState({concluida})

    function finalizarTarefa() {

        setTarefaConcluida(tarefa, tarefaConcluida)
    }

    return(
        <div>

            <button onClick={finalizarTarefa}>Tarefa concluida</button>

        </div>
    )
}

export default ListItem