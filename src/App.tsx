import {useState, useEffect} from 'react'
export default function App(){
  const [title,setTitle]=useState('title')
  const demo=1;
  const [demoInfo] = useState(demo>=1);
  useEffect(()=>{
    const timer=setTimeout(()=>{setTitle('useEffect title')},1000)
    return ()=>{
      clearTimeout(timer)
    }
  },[])
  return (
    <>
    <p>{demoInfo ? 'true' : 'false'}</p>
      <button onClick={()=>{
        setTitle('click title')
      }}>{title}</button>
    </>
  )
}