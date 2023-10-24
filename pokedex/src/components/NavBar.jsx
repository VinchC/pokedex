import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex - 1)
    }
    
    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex + 1)
    }

    return (
          <nav>
            {pokemonIndex > 0 && (<button onClick={handleClickPrevious}>Previous</button>)}
            {pokemonIndex < pokemonList.length - 1 && (<button onClick={handleClickNext}>Next</button>)}
          </nav>
    )
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setPokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
      })
    ).isRequired,
  };


export default NavBar;