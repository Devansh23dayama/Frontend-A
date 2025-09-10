import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import NotFound from './NotFound'
import Home from './Home'
import Counter from './Counter'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)


  
  return (
    <>
    <BrowserRouter>
   <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Body' element={<Body/>}/>
       <Route path='/Footer' element={<Footer/>}/>
       <Route path='/Counter' element={<Counter/>}/>
       <Route path='*' element={<NotFound/>}/>


      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
