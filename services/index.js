export async function getPokemon(pokemon) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + `${pokemon}`)
  const data = await res.json()
  
  return data
}

export async function getAllPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data = await res.json()

  return data
}