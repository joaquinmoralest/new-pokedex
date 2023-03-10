import Image from 'next/image'
import styles from 'styles/Card.module.css'
import Spinner from './Spinner'

function Card({sprite, name, pokeId, stats, types, isLoading}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {isLoading 
          ? <Spinner />
          : <div className={styles.pokemonImg}>
              <img loading='lazy' src={sprite} alt="" />
            </div>
        }
        <div className={styles.pokemonIdentity}>
          <p>
            <Image loading='lazy' src="/img/pokeball.png" alt="" width={15} height={15} />
            {pokeId}
          </p>
          <h2>{name}</h2>
          <div className={styles.types}>
            {types?.map((type) => {
              return(
                <div key={type.type.name}>
                  <p>{type.type.name}</p>
                </div>
              )
            })}
          </div>
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
