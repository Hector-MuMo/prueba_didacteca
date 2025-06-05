import { useStateContext } from "../context/useStateContext"
import { Card } from "antd";
import { ArrowLeftOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import portal from '../assets/portalGif.gif'
import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import type { Character } from "../types/typeCharacter";

import '../styles/characterInfo.css'

const { Meta } = Card;

const CharacterInfo = () => {
  const { sharingState, setSharingState } = useStateContext();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFavorite = () => {
    if (!isFavorite && sharingState.favorites) {
      if (sharingState.favorites.length < 5) {
        setSharingState({
          ...sharingState,
          favorites: [sharingState.characterInfo, ...sharingState.favorites]
        })
      } else if (sharingState.favorites.length === 5) {
        const lastElement = sharingState.favorites[sharingState.favorites.length - 1]
        const deleteLast = sharingState.favorites.filter((item: Character) => item.id !== lastElement.id)
        setSharingState({
          ...sharingState,
          favorites: [sharingState.characterInfo, ...deleteLast]
        })
      }
    } else {
      const deleteChar = sharingState.favorites.filter((item: Character) => item.id !== sharingState.characterInfo.id)
      setSharingState({
        ...sharingState,
        favorites: deleteChar
      })
    }

    setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    const found = sharingState.favorites.find((item: Character) => item.id === sharingState.characterInfo.id)

    if (found) {
      setIsFavorite(true)
    }
  }, [sharingState]);

  return (
    <div className="characterInfo-container">
      <figure className="characterInfo-img">
        <div className="characterInfo-card">
          {
            sharingState.characterInfo.name
              ?
              <Card
                cover={<img src={sharingState.characterInfo.image} alt={sharingState.characterInfo.name} />}
                actions={
                  isFavorite ?
                    [
                      <ArrowLeftOutlined style={{ fontSize: '25px', color: 'yellowgreen' }} onClick={() => navigate('/')} />,
                      <HeartFilled style={{ fontSize: '25px', color: 'red' }} onClick={handleFavorite} />,
                    ]
                    :
                    [
                      <ArrowLeftOutlined style={{ fontSize: '25px', color: 'yellowgreen' }} onClick={() => navigate('/')} />,
                      <HeartOutlined style={{ fontSize: '25px', color: 'red' }} onClick={handleFavorite} />,
                    ]
                }
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
              :
              <div className="characterInfo-notFound">
                <p >Return to main page and choose a character</p>
                <NavLink to='/' className="characterInfo-return">Return to main page</NavLink>
              </div>
          }
        </div>
        <img src={portal} alt="portal" />
      </figure>
    </div>
  )
}

export default CharacterInfo