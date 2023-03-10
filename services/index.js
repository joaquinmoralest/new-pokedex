export async function getPokemon(pokemon) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + `${pokemon}`)
    const data = await res.json()
    
    return data
  }
  catch(error) {
    console.log(error)
  }
}

export async function getAllPokemon(limit, page) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}}&offset=${page * limit}`)
  const data = await res.json()

  return data
}
