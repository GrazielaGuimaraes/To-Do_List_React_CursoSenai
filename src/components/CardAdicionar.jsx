import { useState } from "react"
import { Proptypes } from "prop-types"

//Recebe a função por props vindo de App
function CardAdicionar({adicionarTarefa, filtrarSomenteFinalizados, somenteFinalizados}){

    const [texto, setTexto] = useState('')

    function handleAdicionar(e){
        e.preventDefault()

        if(texto != ''){
            adicionarTarefa(texto)
            setTexto('')
        }
    }

    return(

        <div>

            <input type="text"
            placeholder="Adicione a tarefa"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}/>

            <button onClick={handleAdicionar}>Criar tarefa</button>


            <input type="checkbox"
            checked = {somenteFinalizados}
            onChange = {e => filtrarSomenteFinalizados(e.target.checked)}
            />

            <label>Filtrar somente finalizadas</label>


        </div>
    )
}

CardAdicionar.proptype = {
    adicionarTarefa: Proptypes.func.isRequired
}

export default CardAdicionar