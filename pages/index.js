import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import { getPokemon } from '@/services'
import Card from '../components/Card'
import Input from '../components/Input'

export default function Home() {
  const [pokemon, setPokemon] = useState('')
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
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
    </Layout>
  )
}
