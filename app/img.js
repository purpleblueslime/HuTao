'use client'

import {useState, useEffect} from 'react'
import styles from './img.module.css'

export default function component ({key, url}) {

  const [lazy, $lazy] = useState(true)

  useEffect(() => {
    if (!lazy) $lazy(true)
    const {complete} = app.querySelector(`#${key}`)
    if (!complete) return
    $lazy(false)
  }, [url])

  return (
    <div draggable className={styles.imgWrap}>
      <img className={styles.img} id={`${key}`} 
        loading='lazy' onLoad={() => $lazy(false)} src={url} />
      {lazy ? <div className={styles.lazy}>
        <div className={styles.barWrap}>
          <div className={styles.bar} />
        </div>
      </div>:<></>}
    </div>
  )

}