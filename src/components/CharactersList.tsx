import CharacterCard from './CharacterCard'

import '../styles/charactersList.css'
import type { Character } from '../types/typeCharacter'

interface CharactersList {
  characters: []
}

const CharactersList = ({ characters }: CharactersList) => {

  const list = characters.map((item: Character) => <CharacterCard character={item} key={item.id} />)


  return (
    <div className='characters_container'>
      {list}
    </div>
  )
}

export default CharactersList