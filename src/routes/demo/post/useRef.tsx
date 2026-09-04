import { createFileRoute } from '@tanstack/react-router'
import {useRef,useEffect} from 'react'

export const Route = createFileRoute('/demo/post/useRef')({
  component: RouteComponent,
})

function RouteComponent() {

const inputRef = useRef<HTMLInputElement>(null);
useEffect(()=>{
  inputRef.current?.focus();
},[])
  return <div>Hello "/demo/post/useRef"!
    <input ref={inputRef} placeholder='请输入值'></input>
  </div>
}
