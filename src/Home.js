import React, { useState } from 'react'; 
import Icones from './Icones.js'
import Grid from './Grid.js'


const Home = () => {
  
  const [type, setType] = useState('livros')
  
  return (
    <div className="content">
      <Icones></Icones>
      <section>
        <nav className="bottons">
          <button className={`btn ${type == 'livros'? 'btn-active' : 'btn-inactive'}`} onClick={() => setType('livros')}>Livros</button>
          <button className={`btn ${type == 'filmes'? 'btn-active' : 'btn-inactive'}`} onClick={() => setType('filmes')}>Filmes</button>
          <button className={`btn ${type == 'series'? 'btn-active' : 'btn-inactive'}`} onClick={() => setType('series')}>Séries</button>
        </nav>
        <Grid type={type}></Grid>
      </section>
    </div>
  );
};

export default Home;
