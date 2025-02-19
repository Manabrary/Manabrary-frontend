import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mypage from './Mypage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Mypage />
  </StrictMode>,
)
