import React from 'react';
import '../styles/Home.css';
// import rmlogo from '../assets/rmlogo.png';
// import rmimg from '../assets/rmimg.png';
import rickandmorty from '../assets/rickandmorty.png';

function Home() {
  return (
    <div className='home-container'>
        {/* <img src={rmlogo} alt='' id='rmlogo'/>
        <img src={rmimg} alt='' id='rmimg'/> */}
        <img src={rickandmorty} alt='' id='logo'/>

    </div>
  )
}

export default Home;
