import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CharacterInfo from './pages/CharacterInfo.tsx';
import FavoritesChars from './pages/FavoritesChars.tsx';
import Provider from './context/context.tsx';



createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/character-info' element={<CharacterInfo />} />
          <Route path='/favorites-chars' element={<FavoritesChars />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
