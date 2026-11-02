import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PrivacyPolicy } from './components/PrivacyPolicy/PrivacyPolicy'
import { GlobalStyle } from './styles/global'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Main></Main>
              <Footer></Footer>
            </>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
