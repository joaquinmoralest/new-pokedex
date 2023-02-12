import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { getAllPokemon } from '@/services'
import { useEffect, useState } from 'react'
import styles from '../../styles/AllView.module.css'

function AllView() {
  const [allPokemons, setAllPokemons] = useState([])

  async function fetchData() {
    const data = await getAllPokemon()
    const {results} = data

    setAllPokemons(results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log( allPokemons)

  return (
    <Layout>
      <div className={styles.content}>
        {allPokemons.map((pokemon, i) => {
          return (
            <Card
              key={i}
              
              // isLoading={isLoading}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default AllView