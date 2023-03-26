import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //Array vazio
  const [tarefas, setTarefas] = useState([])

  //lista -> setando objetos na mão
  const [lista, setLista] = useState([
    {id: 1, texto: "Comprar materiais", concluida: false},
    {id: 2, texto: "Comprar pneus novos", concluida:true}
  ])

  function criarTarefa(texto){

    let novaLista = [...lista]
    novaLista.push({
      id: lista.length + 1,
      texto: texto, //por parâmetro
      concluida: false //inicia com false no checkbox
    })

  }

  return (
    <div className="App">
     
    </div>
  )
}

export default App
