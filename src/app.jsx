import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// components
import Home from './home'
import Mint from './mint'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mint' element={<Mint/>}/>
      </Routes>
    </Router>
  )
}

export default App
