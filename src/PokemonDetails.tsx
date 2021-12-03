import React, { FC, useEffect, useState } from 'react';
import axios, { Canceler } from 'axios';
import './App.css';
import { useParams } from 'react-router-dom';
import {IPokemonDetails, IType, IStat} from './interfaces'

  const PokemonDetails: FC = () => {
    const { id } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState<[IPokemonDetails] | null>(null)
    const [pokemonType, setPokemonType] = useState('type')

    useEffect(()=>{
        let cancel: Canceler
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {cancelToken: new axios.CancelToken(c => cancel =c )}).then(res =>{
        setPokemonDetails([res.data])
        setPokemonType(res.data.types[0].type.name)
        console.log(res.data)
        })
        return () =>{
            cancel()
        }
    }, [id])

    return (
      <>
            {pokemonDetails && pokemonDetails.map((pokemon) =>
            <div key={pokemon.name} className={"pokemon-details " + pokemonType} >
                <h2>{pokemon.name} #{id}</h2>
                <img src={pokemon.sprites.front_default} alt="" className="image-details"/>
                <p><b>Height:</b> {Number(pokemon.height) * 10 } cm</p>
                <p><b>Weight:</b> {Number(pokemon.weight) / 10} kg</p>
                <p><b>Type:</b> {pokemon.types.map((type: IType) => <div key={type.type.name}>{type.type.name}</div> )} </p>        
                <p><b>Stats:</b> {pokemon.stats.map((stat: IStat) => <div className="details-stats" key={stat.stat.name}>{stat.stat.name}  <progress value={stat.base_stat.toString()} max="100"> 32% </progress></div> )} </p>        
            </div> )}
      </>
    );
  }

  export default PokemonDetails;