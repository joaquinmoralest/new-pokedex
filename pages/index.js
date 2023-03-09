import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'
import { getAllPokemon, getPokemon } from '@/services'
import Card from '../components/Card'
import Input from '../components/Input'

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState([])
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    const data = await getAllPokemon()
    const {results} = data

    const pokemonFullInfo = await Promise.all(results.map(async (pokemon) => {
      const res = await getExtraInfo(pokemon.url)
      return res
    }))
    setPokemonsList(pokemonFullInfo)
  }

  async function getExtraInfo(url) {
    const res = await fetch(url)
    const data = await res.json()

    return data
  }
  
  async function handleSubmit(e) {
    e.preventDefault()  
    setIsLoading(true)

    if (!['', undefined, null].includes(pokemon)) {
      let res = await getPokemon(pokemon)
      setData(res)
    }

    setIsLoading(false)
  }

  function handleChange(e) {
    setPokemon(e.target.value)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(pokemonsList)
  
  return (
    <Layout>
      <Input onChange={handleChange} onSubmit={handleSubmit} />

      {data && (
        <>
          <Card 
            sprite={data.sprites.other.dream_world.front_default 
              ? data.sprites.other.dream_world.front_default 
              : data.sprites.front_default} 
            name={data.name} 
            pokeId={data.id}
            stats={data.stats} 
            isLoading={isLoading}
          />
        </> 
      )}

      <div className={styles.allResults}>
        {pokemonsList && (
          pokemonsList.map((pokemon) => {
            return (
              <Card
                key={pokemon?.id} 
                sprite={pokemon?.sprites?.other?.dream_world?.front_default 
                  ? pokemon.sprites?.other?.dream_world?.front_default 
                  : pokemon.sprites?.front_default} 
                name={pokemon?.name} 
                pokeId={pokemon?.id}
                stats={pokemon?.stats} 
                isLoading={isLoading}
              />
            )
          })
        )}
      </div>
    </Layout>
  )
}
