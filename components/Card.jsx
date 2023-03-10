import Image from 'next/image'
import styles from 'styles/Card.module.css'
import Spinner from './Spinner'

function Card({sprite, name, pokeId, stats, types, isLoading}) {
  const background = 
    types[0].type.name === 'normal' ? styles.normal : 
    types[0].type.name === 'fighting' ? styles.fighting : 
    types[0].type.name === 'flying' ? styles.flying : 
    types[0].type.name === 'poison' ? styles.poison : 
    types[0].type.name === 'ground' ? styles.ground : 
    types[0].type.name === 'rock' ? styles.rock : 
    types[0].type.name === 'bug' ? styles.bug : 
    types[0].type.name === 'ghost' ? styles.ghost : 
    types[0].type.name === 'steel' ? styles.steel : 
    types[0].type.name === 'fire' ? styles.fire : 
    types[0].type.name === 'water' ? styles.water : 
    types[0].type.name === 'grass' ? styles.grass : 
    types[0].type.name === 'electric' ? styles.electric : 
    types[0].type.name === 'psychic' ? styles.psychic : 
    types[0].type.name === 'ice' ? styles.ice : 
    types[0].type.name === 'dragon' ? styles.dragon : 
    types[0].type.name === 'dark' ? styles.dark : 
    types[0].type.name === 'fairy' && styles.fairy 

  return (
    <div className={`${styles.card} ${background}`}>
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
