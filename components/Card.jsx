import Image from 'next/image'
import styles from 'styles/Card.module.css'
import Spinner from './Spinner'

function Card({sprite, name, pokeId, stats, isLoading}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {isLoading 
          ? <Spinner />
          : <div className={styles.pokemonImg}>
              <img src={sprite} alt="" />
            </div>
        }
        <div className={styles.pokemonIdentity}>
          <p>
            <Image src="/img/pokeball.png" alt="" width={15} height={15} />
            {pokeId}
          </p>
          <h2>{name}</h2>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.labels}>
          {stats?.map((stat, i) => {
            return (
              <p key={i}>{stat.stat.name}</p>
            )
          })}
        </div>
        <div className={styles.stats}>
          {stats?.map((stat, i) => {
              return (
                <p key={i}>{stat.base_stat}</p>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Card
