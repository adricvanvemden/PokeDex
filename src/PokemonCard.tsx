import axios, { Canceler } from 'axios';
import React, { FC, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const PokemonCard: FC<{name: string, url: string}> = (props) =>{
    const name = props.name
    const url  = props.url
    const pokeIndex  = url.split("/")[url.split("/").length - 2]
    const [pokemonType, setPokemonType] = useState('type')
    const [imageUrl, setImageUrl] = useState('')

  useEffect(()=>{
      let cancel: Canceler
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`, {cancelToken: new axios.CancelToken(c => cancel =c )}).then(res =>{
        setImageUrl(res.data.sprites.front_default)
        setPokemonType(res.data.types[0].type.name)
        console.log(res.data)
      })

      return () =>{
        cancel()
    }

  }, [pokeIndex])

    return (
        <Link to={`/pokemon/${pokeIndex}`} className={"pokemon-card " + pokemonType}>
            <div className="card-index">#{pokeIndex}</div>
            <img src={imageUrl} alt="" className="card-image"/>
            <div className="card-name">{name}</div>
        </Link>
    );


}

export default PokemonCard;
