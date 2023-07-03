import React from 'react'
import "./Pokecard.css"


function Pokecard({card}) {
// console.log(pokemon, 'pokecard')
  return (

 <>
    <h3>{card.name}</h3>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`} alt="" />
     <p>Type: {card.type}</p>
    <p className='pb-3'>Exp: {card.base_experience}</p>
      
 </>

 
  
  )
}

export default Pokecard