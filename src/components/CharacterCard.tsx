import { Card } from 'antd';
import type { Character } from '../types/typeCharacter';
import { NavLink } from 'react-router';
import { useStateContext } from '../context/useStateContext';


const { Meta } = Card;

interface CharacterCardProps {
  character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { sharingState, setSharingState } = useStateContext();

  const handleCharacterInfo = () => {
    setSharingState({
      ...sharingState,
      characterInfo: character
    })
  }

  return (
    <NavLink to='/character-info' >
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={character.name} src={character.image} />}
        onClick={handleCharacterInfo}
      >
        <Meta title={character.name} description={<div style={{ display: 'flex', flexDirection: 'column' }}>
          <b>Gender:</b> {character.gender}
          <b>Status:</b> {character.status}
        </div>} />
      </Card>
    </NavLink>
  )
}

export default CharacterCard
