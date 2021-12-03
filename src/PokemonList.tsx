import React, {FC, useEffect, useState} from 'react';
import {IPokemonBasicData} from './interfaces'
import axios, { Canceler } from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList: FC =() => {
    const [allPokemonBasicData, setAllPokemonBasicData] = useState<[IPokemonBasicData]>()
    const [limit, setLimit]  = useState(25)
    const [offset, setOffset]  = useState(0)
        
    useEffect(()=>{
        let cancel: Canceler
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, {cancelToken: new axios.CancelToken(c => cancel =c )}).then(res =>{
            setAllPokemonBasicData(res.data.results)
            console.log(res.data)
        })

        return () =>{
            cancel()
        }
    }, [limit, offset])

    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{ setLimit(parseInt(event.currentTarget.value))}
    const handlePreviousClick = () => {setOffset(Math.max(0, offset - limit))}
    const handleNextClick = () => {setOffset(offset + limit)}


  return (
    <>
    <label> Per page: </label>
    <select defaultValue={limit} onChange={handleLimitChange} className="">
        <option>25</option>
        <option>50</option>
        <option>75</option>
        <option>100</option>
    </select>

    <div className="pokemon-list">
        {allPokemonBasicData && allPokemonBasicData.map((pokemon) =>
        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
    </div>

    <div className="pagination">
        <button className="btn" onClick={handlePreviousClick} disabled={offset === 0}>Previous</button>
        <button className="btn" onClick={handleNextClick}>Next</button>
    </div>
    </>
  );
}


export default PokemonList;
