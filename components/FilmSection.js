import CardFilm from "./CardFilm"
import styles from "../styles/FilmSection.module.css"

const FilmSection = ({ films }) => {
  return (
    <div className={styles.mainSection}>
      <div className={styles.mainSectionHeader}>
        <h4>Movies</h4>
      </div>
      <hr />
      <div className={styles.App}>
        {films.map((film) => (
            <CardFilm key={film.show.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default FilmSection