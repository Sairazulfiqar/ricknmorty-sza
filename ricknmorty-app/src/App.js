import React, {useEffect, useState} from 'react'
import './styles/App.css';
import Home from './components/Home';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Searchbar from './components/Searchbar';

function App() {

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setInfo(data.info);
      } )
      .catch(error => console.log(error));
  }

  const handleSearch = (searchTerm) => {
    const filteredResults = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filteredResults);
};

  const onPrev = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  
  return (
    <div className="App">
      <Home/>
      <Searchbar handleSearch={handleSearch}/>
      <Pagination 
       prev={info.prev} 
        next={info.next} 
        onPrev={onPrev} 
        onNext={onNext}/>
      <Characters characters={characters} characters={filteredCharacters}/>
      <Pagination 
       prev={info.prev} 
        next={info.next} 
        onPrev={onPrev} 
        onNext={onNext}/>
    </div>
  );
}

export default App;
