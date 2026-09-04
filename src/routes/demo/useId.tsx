import { createFileRoute } from '@tanstack/react-router'
import {useId,useEffect} from 'react'
export const Route = createFileRoute('/demo/useId')({
  component: RouteComponent,
})

function RouteComponent() {
  const id=useId();
  useEffect(()=>{console.log('id:',id)},[id]);
  return <div>Hello "/demo/useId"!
    <label htmlFor={id}>账号</label>
    <input id={id}></input>
    
  </div>
}
