import { useStateContext } from "../context/useStateContext"
import { Card } from "antd";
import { HeartFilled } from '@ant-design/icons'
import portal from '../assets/portalGif.gif'

import '../styles/characterInfo.css'

const { Meta } = Card;


const CharacterInfo = () => {
  const { sharingState } = useStateContext();

  const handleFavorite = () => {

  }

  return (
    <div className="characterInfo-container">
      <figure className="characterInfo-img">
        <div className="characterInfo-card">
          <Card
            cover={<img src={sharingState.characterInfo.image} alt={sharingState.characterInfo.name} />}
            actions={[
              <HeartFilled style={{ fontSize: '25px', color: 'red' }} onClick={handleFavorite} />,
            ]}
          >
            <Meta
              title={sharingState.characterInfo.name}
              description={
                <div className="characterInfo-description">
                  <span><b>Origin</b>: {sharingState.characterInfo.origin.name}</span>
                  <span><b>Location</b>:  {sharingState.characterInfo.location.name}</span>
                  <span><b>Episodes Appearance</b>: {sharingState.characterInfo.episode.length}</span>
                </div>
              }
            />
          </Card>
        </div>
        <img src={portal} alt="portal" />
      </figure>
    </div>
  )
}

export default CharacterInfo