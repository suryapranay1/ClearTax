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
import SimpleCarousel1 from './components/carousal1'
import TabsIconWithText from './components/tabpanel'

const App = () => {
  return (
    <>
    <div className='header'>
    <Header/>
    </div>
    
    <div className='maincontent'>
    <Maincontent/>
    </div>
    <div className='main2'>
    <Main2/>
    </div>
    
    <div className='main5'>
    <Main5/>
    </div>
    
    <div className='looking'>
    <Looking/>
    </div>
   
    <div className='designed'>
    <Designed/>
    </div>
    
    <div className='commited'>
    <Commited/>
    </div>
    
    <div className='ready'>
    <Ready/>
    </div>
    
    <div className='carousal'>
      <SimpleCarousel1/>
    </div>
    <div className='corosal'>
 <SimpleCarousel/>
 </div>
 <Footer/>
 <TabsIconWithText/>
 
 
 
    </>
   
  )
}

export default App