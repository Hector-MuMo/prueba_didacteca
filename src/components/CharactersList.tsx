import CharacterCard from './CharacterCard'

import '../styles/charactersList.css'

interface CharactersList {
  characters: []
}

const CharactersList = ({ characters }: CharactersList) => {

  const list = characters.map(item => <CharacterCard character={item} />)


  return (
    <div className='characters_container'>
      {list}
    </div>
  )
}

export default CharactersList