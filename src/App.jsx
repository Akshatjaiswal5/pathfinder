import { useEffect, useState } from 'react'
import './App.css'
import Pixel from './Pixel'
function App() {
  const [grid, setGrid] = useState([])

  useEffect(()=>{
    let tmp=[];
  for(let i=0;i<1800;i++)
   tmp.push(<Pixel/>);
  console.log(tmp)
  setGrid(tmp);
  },[])
  
  return (
    <div className="App">
      <div className='main'> 
       {grid}
       </div>
    </div>
  )
}

export default App
