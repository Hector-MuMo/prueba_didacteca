import useCharacters from './hooks/useCharacters'
import Logo from './components/Logo';


import './App.css'
import './styles/logo.css'
import SearchBox from './components/SearchBox';
import { useState } from 'react';
import CharactersList from './components/CharactersList';

function App() {
  const [name, setName] = useState<string>('');
  const { characters, character } = useCharacters(name);

  const handleSearch = (value: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value.target.value)
    setName(value.target.value)
  }

  return (
    <>
      <Logo />
      <SearchBox onChange={handleSearch} />
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
