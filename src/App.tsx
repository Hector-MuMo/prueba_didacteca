import { useState } from 'react';
import useCharacters from './hooks/useCharacters'
import CharactersList from './components/CharactersList';
import SearchBox from './components/SearchBox';
import Logo from './components/Logo';
import { NavLink } from 'react-router';


import './App.css'
import './styles/logo.css'

function App() {
  const [name, setName] = useState<string>('');
  const { characters, character } = useCharacters(name);

  const handleSearch = (value: React.ChangeEvent<HTMLInputElement>) => {
    setName(value.target.value)
  }

  return (
    <>
      <Logo />
      <div className='actions-container'>
        <SearchBox onChange={handleSearch} />
        <NavLink to='favorites-chars' className='action-favs'>Ir a Favoritos </NavLink>
      </div>
      {
        name === ''
          ?
          <CharactersList characters={characters} />
          :
          <CharactersList characters={character} />
      }
    </>
  )
}

export default App
