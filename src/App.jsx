import { useState } from 'react'
import Sidenav from "./components/SideNav"
import Main  from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div>
          <Sidenav/>
          <Main/>
          <Skills/>
          <Projects/>
          <Contact/>
    </div>
    </>
)
}

export default App
