import React from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Projects  from './Components/Projects'
import Skills from './Components/Skills'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
      <main>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/projects' element={<Projects/>}></Route>
              <Route path='/skills' element={<Skills/>}></Route>
              <Route path='/achievements' element={<Achievements/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
      </BrowserRouter>
      </main>
      
    </div>
  )
}

export default App
