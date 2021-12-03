import React, {FC} from 'react';
import './App.css';
import {Link, Route, Routes } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

const App: FC =() => {
  return (
    <div className="App">
       <Link to="/"> <h1>PokeDex</h1></Link>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
