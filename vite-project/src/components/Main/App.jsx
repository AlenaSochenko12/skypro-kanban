import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Column from '../Column/Column'
import PopBrowse from '../Popups/PopBrowse/PopBrowse'
import PopNewCard from '../Popups/PopNewCard/PopNewCard'
import PopUser from '../Popups/PopUser/PopUser'

function App() {
  return (
    <>
      <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <Column />
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
