import React, { useContext } from 'react'
import Intro from './components/introduction/intro'
import About from './components/about/About'
import Productslist from './components/productlist/productlist'
import Contact from './components/contact/Contact'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './context'
const App = () => {
  const theme= useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor : darkMode ?"black":"white",color: darkMode ? "white" : "black" }}>
      <Toggle />
      <Intro />
      <About/>
      <Productslist/>
      <Contact/>
    </div>
  )
}

export default App