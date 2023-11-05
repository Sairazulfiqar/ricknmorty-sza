import React, {useEffect, useState} from 'react'
import './styles/App.css';
import Home from './components/Home';
import Characters from './components/Characters';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        setCharacters(data.results);
        setInfo(data.info);
      } )
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchCharacters(initialUrl);

  }, [])

  return (
    <div className="App">
      <Home />
      <Pagination/>
      <Characters characters={characters}/>
      <Pagination/>

    </div>
  );
}

export default App;
