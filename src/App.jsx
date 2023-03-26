import ListItem from './components/ListItem'
import './App.css'
import CardAdicionar from './components/CardAdicionar'

function App() {

 
  const [somenteFinalizados, setSomenteFinalizados] = useState(false)

  //lista -> setando objetos na mão
  const [lista, setLista] = useState([
    {id: 1, texto: "Comprar materiais", finalizado: false},
    {id: 2, texto: "Comprar pneus novos", finalizado:true}
  ])




  function adicionarTarefa(texto){

    //Vai receber o que tem na lista
    let novaLista = [...lista]

    novaLista.push({
      id: lista.length + 1,
      texto: texto, //por parâmetro
      finalizado: false //inicia com false no checkbox
    })

    //Lista vai receber a nova lista
    setLista(novaLista)

    
    const filtrarSomenteFinalizados = (valor) => {
        setSomenteFinalizados(valor)
    }

    //Filtrando tarefas finalizadas
     const listaFiltrada = lista.filter(item => item.finalizado)


  }

  return (
    <div className="App">

      <CardAdicionar

                                  //Não está reconhecendo a constante que recebe uma arrow function
      filtrarSomenteFinalizados = {filtrarSomenteFinalizados}
      adicionarTarefa = {adicionarTarefa}
      somenteFinalizados = {somenteFinalizados}
      />
      
       {/*Operador ternário*/}
       { somenteFinalizados ? (
        listaFiltrada.map(item => (
          <ListItem key = {item.id} item = {item} />
      ))
      ) : (
        lista.map((item, index) => (
        <ListItem key={index} item = {item} />
      ))
  )
    
    }
     
    </div>
  )
}

export default App
