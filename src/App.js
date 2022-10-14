import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';
import './styles.css';


function App() {

  const [input, setInput] = useState('')

// api: 59124120/json

  async function handleSearch(){
    if(input !== ''){
      try{
        const response = await api.get(`${input}/json`);
        console.log(response);
      }catch{

      }
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de Cep</h1>

      <div className="containerInput">
          <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
          />
          <button className="buttonSearch" onClick={handleSearch()}>
            <FiSearch size={25} color="#fff" />
          </button>
      </div>

      <main className='main'>
        <h2>CEP: 40028922</h2>
        <span>Rua do Yudi Tamashiro</span>
        <span>Complemento: Vila Cesamo</span>
      </main>

    </div>
  );
}

export default App;
