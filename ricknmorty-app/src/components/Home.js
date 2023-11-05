
import React from 'react';
import '../styles/Home.css';
import rickandmorty from '../assets/rickandmorty.png';

function Home() {

  return (
    <div className='home-container'>
        <img src={rickandmorty} alt='' id='logo'/>
    </div>
  )
}

export default Home;
