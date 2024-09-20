import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Discover from './pages/Discover'
import Explore from './pages/Explore'
import Header from './components/Header'
import Signup from './pages/Signup'
import Boxsection from './pages/Boxsection'
import Overview from './pages/Overview'
import Collection from './pages/Collection'
import Movingbox from './pages/Movingbox'


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Boxsection/>
  <Signup/> 
  <Explore/>
  <Movingbox/>
  <Overview/>
  <Collection/>
  <Discover/>
  </BrowserRouter>
}
