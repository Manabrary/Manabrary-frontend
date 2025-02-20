import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mypage from './Mypage'
import DeckDetail from './components/Deck/DeckDetail'
import Header from './components/Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
