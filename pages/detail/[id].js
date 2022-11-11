import React, { useEffect, useState } from 'react'
import { tvMazeShowsDetail } from '../../services/data'
import { useRouter } from 'next/router'
import styles from '../../styles/DetailMovie.module.css'
import Image from 'next/image'

const DetailMovie = () => {
  // const navigate = useNavigate();
  // console.log(filmDetail)
  // const { id } = useParams();
  const router = useRouter()
  const {id} = router.query
  const [filmDetail, SetFilmDetail] = useState([]);

  useEffect(() => {
    fetchFilmDetail(id);
  }, [id]);

  const fetchFilmDetail = async (id) => {
    const data = await tvMazeShowsDetail(id);
    SetFilmDetail(data);
  }
  console.log(id)
  return (
    <>
      <div className={styles["detail-page"]}>
        <div className={styles["detail-one"]}>
          <p className={styles["detail-film-name"]}>{filmDetail?.name}</p>
          <img src={filmDetail?.image?.medium} alt={filmDetail?.name} />
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
            {filmDetail?.officialSite ? <a href={filmDetail?.officialSite} className={styles["button-hbo"]} target="_blank" rel="noreferrer">HBO</a> : ''}
            <a href={filmDetail?.url} className={styles["button-tvmaze"]}>TV Maze</a>
          </div>
          <p>Language: <strong>{filmDetail?.language}</strong></p>
          <p>Premiered: <strong>{(filmDetail?.premiered) ? filmDetail?.premiered : 'No Info'}</strong></p>
          <p>Rating: <strong>{(filmDetail?.rating?.average) ? filmDetail?.rating?.average : 'No Info'}</strong></p>
        </div>
      </div>
      <div className={styles["div-button-back"]}>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
      </div>
    </>
  )
}

export default DetailMovie