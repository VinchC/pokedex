// import "./../App.css";
import styles from './PokemonCard.module.css';

function PokemonCard() {
    return <section className={styles.container}>
        <figure>
        <img   className="avatar"
        style={{
            // width: user.imageSize,
            // height: user.imageSize,
        }} 
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
    <figcaption className={styles.title}>Bulbasaur</figcaption>
    </figure>
    </section>
}

export default PokemonCard;

