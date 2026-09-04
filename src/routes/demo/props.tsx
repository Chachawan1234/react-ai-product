import { createFileRoute } from '@tanstack/react-router'
import {useState,useEffect} from 'react'
export const Route = createFileRoute('/demo/props')({
  component: RouteComponent,
})
interface Props{
  name:string,
  click:()=>void
}
function ChildDemo(props : Props){

  return (
    <div>
      <span>{props.name}</span>
      <button onClick={props.click}>点击修改名字</button>
    </div>
  )
}
function RouteComponent() {
  const [name,setName]=useState('张三');
  return (
  <div>Hello "/demo/props"!
    <ChildDemo name={name} click={()=>{
      setName('✌叶')
    }}/>
  </div>
  )
}
