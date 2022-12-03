import './App.css'
import { CardProfile } from './Components/CardProfile'
import { MyProjects } from './Components/MyProjects'
import { Cardlinks} from './Components/CardLinks'
import {CardTec} from './Components/CardTec'
function App() {
  return (
    <div className="App">
  
      <div className="row p-4" >
        <div className='col-3'>
        <CardProfile />
        <Cardlinks />
        <CardTec />
        </div>
        <div className='col'>
        <MyProjects />
        </div>
      </div>
    </div>

  )
}

export default App
