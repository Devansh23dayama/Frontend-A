import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Body from './Body'

function App() {
  const [count, setCount] = useState(0)


  const message = {
    name:'devansh',
    age:23,
    gender:male
  }

  
  return (
    <>
     <Header anyword={message}/>
     <Body anyword={message}/>
    </>
  )
}

export default App
