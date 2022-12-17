import './App.css'
import { CardProfile } from './Components/CardProfile'
import { MyProjects } from './Components/MyProjects'
import { Cardlinks} from './Components/CardLinks'
import {CardTec} from './Components/CardTec'
import { CardProjects } from './Components/CardProjects'
function App() {
  return (
    <div className="App">
      <div className="row p-4" >
        <div className='col-3'>
        <CardProfile />
        <Cardlinks />
        <CardTec />
        </div>
        <div className="col">
          <div className="d-flex">
             <MyProjects />
          </div>
          <div className="d-inline-block">
            <CardProjects tituloProjeto="Projeto número Um" descricao="O meu primeiro projeto começa com html css e Javascript" /> 
            <CardProjects tituloProjeto="Projeto número dois" descricao="O meu primeiro projeto começa com html css e Javascrip" />  
          </div>
        </div>  
      </div>
    </div>

  )
}

export default App
