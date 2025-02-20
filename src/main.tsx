import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mypage from './Mypage.tsx'
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Header/>
    <Mypage />
  {/* <Footer/> */}
  </StrictMode>,

)
