import axios from "axios";
import { useEffect, useState } from "react";

// interface useCharactersProps {
//   name?: string
// }

const useCharacters = (name?: string) => {
  const [characters, setCharacters] = useState<[]>([]);
  const [character, setCharacter] = useState<[]>([]);

  const getCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      //console.log(response.data.results);
      setCharacters(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  const getCharacterByName = async (name?: string) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      //console.log(response.data.results)
      setCharacter(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacters();
    getCharacterByName(name)

  }, [name])


  return (
    {
      characters,
      character
    }
  )
}

export default useCharacters