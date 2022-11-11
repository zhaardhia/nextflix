import Image from "next/image"
import styles from "../styles/Banner.module.css"
const Banner = ({ films }) => {

  const banner = films[0]

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
            <a href={`./detail/${banner?.show?.id}`} className={styles.bannerTodetail} >See Detail Info</a>
            <a href={banner?.show?.url} className={styles.bannerToofficial} target="_blank" rel="noreferrer">See Official Info</a>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Banner