import { NavLink } from "react-router"
import Logo from "../components/Logo"
import CharactersList from "../components/CharactersList"
import { useStateContext } from "../context/useStateContext"

import '../styles/characterInfo.css'
import '../styles/favoriteChars.css'


const FavoritesChars = () => {
  const { sharingState } = useStateContext();

  return (
    <div>
      <Logo />
      <div className="favoriteChars-return-container">
        <NavLink className='favoriteChars-return-link' to='/'>Return to main Page</NavLink>
      </div>
      {
        sharingState.favorites && sharingState.favorites.length > 0
          ?
          <CharactersList characters={sharingState.favorites} />
          :
          <div className="favoriteChars-list-container">
            <div className="favoriteChars-notFound">
              <p >Return to main page and choose a character</p>
            </div>
          </div>
      }
    </div>
  )
}

export default FavoritesChars