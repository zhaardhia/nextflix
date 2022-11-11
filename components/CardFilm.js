import Image from "next/image"
import styles from "../styles/CardFilm.module.css"
const CardFilm = ({ film }) => {

  return (
    <div className={styles.card}
    >
      
        <Image 
          className={styles.foto} 
          src={film?.show?.image ? film?.show?.image?.medium : require("../images/No_Picture.jpeg")} 
          alt={film?.show.name} 
          width={150}
          height={210}
          priority
        />
      
      <p className={styles.filmNameCard}>{film.show.name}</p>
    </div>
  )
}

export default CardFilm