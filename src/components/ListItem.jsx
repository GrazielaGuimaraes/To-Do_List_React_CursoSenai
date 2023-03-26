import { useState } from "react"



function ListItem({item}){

    const {finalizado, setFinalizado} = useState(item.finalizado)

    

    return(
        
            <div>
           <input
           type="checkbox"
           checked = {finalizado}
           onChange={e => setFinalizado(e.target.checked)}/>

           <label>{item.texto}</label>
            </div>
        
    )
}

export default ListItem