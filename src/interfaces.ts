export interface IPokemonBasicData{
    name: string
    url: string
}

export interface IPokemonAdvData{
    abilities: []
    base_experience: Number
    forms: []
    game_indices: []
    height: Number
    held_items: []
    id: Number
    is_default: Boolean
    location_area_encounters: string
    moves: []
    name: string
    order: Number
    past_types: []
    species: {}
    sprites: {
        front_default: string
    }
    stats: []
    types: []
    weight: Number
  }

export interface IPokemonDetails{
    abilities: []
    base_experience: Number
    forms: []
    game_indices: []
    height: Number
    held_items: []
    id: Number
    is_default: Boolean
    location_area_encounters: string
    moves: []
    name: string
    order: Number
    past_types: []
    species: {}
    sprites: {
        front_default: string
    }
    stats: []
    types: []
    weight: Number
  }
  
export  interface IType{
    type: {
        name: string
        url: string
    }
      
  }

  export  interface IStat{
      base_stat: Number
      effort: Number
      stat: {
          name: string
          url: string
      }
    
}