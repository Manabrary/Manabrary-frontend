import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mypage from './components/mypages/Mypage'
import DeckDetail from './components/Deck/DeckDetail'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Mypage />} />
        <Route path="/decks/:deckId" element={<DeckDetail />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
