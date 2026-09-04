import { createFileRoute } from '@tanstack/react-router'
import {useRef,useState,useLayoutEffect} from 'react'
export const Route = createFileRoute('/demo/useLayoutEffect')({
  component: RouteComponent,
})

function RouteComponent() {

  const divRef=useRef<HTMLDivElement>(null);
  const [height,setHeight]=useState<number>();
  useLayoutEffect(()=>{
    setHeight(divRef.current?.offsetHeight||0)
  },[])
  return <div>Hello "/demo/useLayoutEffect"!
    <div ref={divRef}>我是盒子</div>
    <p>盒子高度为：{height}</p>
  </div>
}
