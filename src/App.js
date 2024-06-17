import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Maincontent from './components/maincontent'
import Main2 from './components/main2'
import Main5 from './components/main5'
import Looking from './components/looking'
import Designed from './components/designed'
import Commited from './components/commited'
import Ready from './components/Ready'
import SimpleCarousel from './components/courosal'
import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <Maincontent/>
    <Main2/>
    <Main5/>
    <Looking/>
    <Designed/>
    <Commited/>
    <Ready/>
    <div className='corosal'>
 <SimpleCarousel/>
 </div>
 <Footer/>
 
 
 
    </>
   
  )
}

export default App