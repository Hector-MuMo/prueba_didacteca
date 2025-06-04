import { Card } from 'antd';

const { Meta } = Card;

interface CharacterCardProps {
  character: {
    id: number
    created: string,
    episode: [string],
    gender: string,
    image: string,
    location: {
      name: string,
      url: string
    },
    name: string,
    origin: {
      name: string,
      url: string
    }
    species: string,
    status: string,
    type: string,
    url: string
  }
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={character.name} src={character.image} />}
    >
      <Meta title={character.name} description={<div style={{ display: 'flex', flexDirection: 'column' }}>
        <b>Gender:</b> {character.gender}
        <b>Status:</b> {character.status}
      </div>} />
    </Card>
  )
}

export default CharacterCard
