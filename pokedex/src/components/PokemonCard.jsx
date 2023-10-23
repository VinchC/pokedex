import PropTypes from "prop-types";

function PokemonCard({props}) {

  return <figure>
              {props.imgSrc ? <img src={props.imgSrc} /> : <p>???</p>}
              <figcaption>{props.name}</figcaption>
          </figure>
}

PokemonCard.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;