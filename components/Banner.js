import Image from "next/image"
import styles from "../styles/Banner.module.css"
import { useMovie } from "../contexts/ApiContext"
import Link from "next/link"

const Banner = () => {
  const { state } = useMovie();

  const banner = Object.keys(state?.banner).length === 0 ? state?.movie[0] : state?.banner

  return (
    <div className={styles.banner}>
      <div className={styles.bannerInfo}>
        <p className={styles.bannerTitle}>{banner?.show?.name}</p>
        <div className={[styles.bannerDivImage, styles.bounce1].join(" ")}>
          <Image 
            className={styles.bannerImage} 
            src={banner?.show.image ? banner?.show.image.medium : require("../images/No_Picture.jpeg")} 
            alt={banner?.show?.name} 
            width={224}
            height={314}
          />
        </div>
        
        <div>
          <div className={styles.bannerGenre}>
            {banner?.show?.genres.map((v, i) => {
              return(
                <div key={i} className={styles.genreInfo}>
                  <p className={styles.genreTitleInfo}>{v.toUpperCase()}</p>
                </div>
              )
            })}
          </div>
          <div className={styles.buttonBanner}>
            <Link href={`/detail/${banner?.show?.id}`} className={styles.bannerTodetail} >See Detail Info</Link>
            <Link href={banner?.show?.url} className={styles.bannerToofficial} target="_blank" rel="noreferrer">See Official Info</Link>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Banner