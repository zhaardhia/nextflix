import Image from "next/image"
import styles from "../styles/CardFilm.module.css"
import { useMovie } from "../contexts/ApiContext"

const CardFilm = ({ film }) => {
  const { dispatch } = useMovie()

  const handleClickBanner = (e) => {
    dispatch({type: 'setBanner', payload: e})
  }

  return (
    <div className={styles.card}
      onClick={(() => {
        handleClickBanner(film)
      })}
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