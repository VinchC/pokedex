function PokemonCard({props}) {

  console.log(props);

  return <figure>
              {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
              <figcaption>{props.name}</figcaption>
          </figure>
}

export default PokemonCard;



// function PokemonCard({pokemonProp}) {

//     console.log(pokemonProp);

//     return <figure>
//                 {pokemonProp.imgSrc ? <img src={pokemonProp.imgSrc} /> : <p>???</p>}
//                 <figcaption>{pokemonProp.name}</figcaption>
//             </figure>
// }

// export default PokemonCard;

