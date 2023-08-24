import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [value, setvalue] = useState(0)

  useEffect((()=>{
    setInterval(()=>{
      // setvalue((val)=> val + 1)
    },100)
  }),[])
  return (
    <div className='app'>
      <span>Progress bar</span>
      {/* <ProgressBar value = {value}/> */}
    
    </div>
  )
}

export default App