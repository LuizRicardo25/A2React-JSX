//import logo from './logo.svg';
import './App.css';

function App() {
  
  const name ='unisagrado'
  const newname = name.toUpperCase()
  
  function mult(a,b){
    return a*b
  }

  return (
    <div className="App">    
    <h3>AULA DE JSX</h3>
    <p>UNIVERSIDADE - {newname}</p>
    <p>Professor - {'Luiz'}</p>
    <p>Multiplicação = {mult(1,2)}</p>


    
    </div>
    
  );
}

export default App;


