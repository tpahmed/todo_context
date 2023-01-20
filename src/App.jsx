import Affichage from './component/Affichage';
import Insert from './component/Insert';
import Mycontext from './context';
import './App.css';

function App() {

  return (
    <div className="App">
      <Mycontext>
        <Insert/>
        <Affichage/>
      </Mycontext>
    </div>
  )
}

export default App
