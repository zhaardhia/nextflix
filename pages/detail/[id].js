import React, { useEffect, useState } from 'react'
import { tvMazeShowsDetail } from '../../services/data'
import { useRouter } from 'next/router'
import Router from 'next/router'
import styles from '../../styles/DetailMovie.module.css'
import Image from 'next/image'
import SpinnerLoad from '../../components/SpinnerLoad'
import Head from 'next/head'
import Link from 'next/link'

const DetailMovie = () => {
  const router = useRouter()
  const {id} = router.query
  const [filmDetail, SetFilmDetail] = useState([]);

  useEffect(() => {
    fetchFilmDetail(id);
  }, [id]);

  const fetchFilmDetail = async (id) => {
    if (id) {
      const data = await tvMazeShowsDetail(id);
      SetFilmDetail(data);
    }
  }
  console.log(id)
  return (
    <>
      {
        filmDetail?.length < 1 ? (<SpinnerLoad />) 
        : 
        (
          <>
            <Head>
              <title>Campflix | {filmDetail?.name}</title>
              <meta name="keywords" content="ninjas"/>
            </Head>
            <main>
              <div className={styles["detail-page"]}>
                <div className={styles["detail-one"]}>
                  <p className={styles["detail-film-name"]}>{filmDetail?.name}</p>
                  <div className={styles.imgDivDetail}>
                    <Image 
                      className={styles.imgDetail}
                      src={filmDetail?.image?.medium} 
                      alt={filmDetail?.name} 
                      priority
                      width={220}
                      height={315}
                    />
                  </div>
                  
                  <div className={styles["detail-film-genre"]}>
                    {filmDetail?.genres?.map((v, i) => {
                      return(
                        <div key={i} className={styles["genre-info"]}>
                          <p className={styles.genreTitleInfo}>{v.toUpperCase()}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className={styles["detail-two"]}>
                  <p>{(filmDetail?.summary) ? filmDetail?.summary.replace(/<\/?[^>]+(>|$)/g, "\n") : 'No Summary'}</p>
                  <div className={styles["div-button-info"]}>
                    {filmDetail?.officialSite ? <Link href={filmDetail?.officialSite} className={styles["button-hbo"]} target="_blank" rel="noreferrer">HBO</Link> : ''}
                    <Link href={filmDetail?.url} className={styles["button-tvmaze"]} target="_blank" rel="noreferrer">TV Maze</Link>
                  </div>
                  <p>Language: <strong>{filmDetail?.language}</strong></p>
                  <p>Premiered: <strong>{(filmDetail?.premiered) ? filmDetail?.premiered : 'No Info'}</strong></p>
                  <p>Rating: <strong>{(filmDetail?.rating?.average) ? filmDetail?.rating?.average : 'No Info'}</strong></p>
                </div>
              </div>
              <div className={styles["div-button-back"]}>
                <button onClick={() => Router.back()}>Back</button>
              </div>
            </main>
          </>
        )
      }
      
    </>
  )
}

export default DetailMovie