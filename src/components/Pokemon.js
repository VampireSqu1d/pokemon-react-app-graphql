import React from "react";

export function Pokemon({ pokemon }) {
        return (
            <div className='Pokemon'>
                <div className='pokemon__name'>
                     <h3>{pokemon.name}</h3>
                </div>
                <div className='pokemon__meta'>
                    <span>maxHP: {pokemon.maxHP}</span>
                    <br/>
                    <span>maxCP: {pokemon.maxCP}</span>
                </div>
                <div className='pokemon__image'>
                    <img src={pokemon.image} alt={pokemon.name}/>
                </div>
                <div className='pokemon__attacks'>
                    {pokemon.attacks.special.slice(0, 3).map(attack => (
                        <span key={`${attack.name}-${attack.damage}`} >{attack.name}</span>
                    ))}
                </div>
            </div>
        );
}