import { createFileRoute } from '@tanstack/react-router'
import { useImperativeHandle,useRef } from 'react'
export const Route = createFileRoute('/demo/useImperativeHandle')({
  component: RouteComponent,
})
interface refChild{
  focus:()=>void;
  alertAndFocus:()=>void;
}
function ChildDemo({ref,...props}){
  const inputRef=useRef<HTMLInputElement>(null);
  useImperativeHandle(ref,()=>{
    return {
      focus:inputRef.current?.focus,
      alertAndFocus:()=>{
        inputRef.current?.focus();
        alert(inputRef.current?.value);
      }
    }
  },[])
  return (
    <div>
      <input ref={inputRef} {...props}></input>
    </div>
  )
}
function RouteComponent() {
  const ref=useRef<refChild>(null)
  return <div>Hello "/demo/useimperativeHandle"!
    <ChildDemo ref={ref}></ChildDemo>
    <button onClick={()=>ref.current?.focus}>聚焦</button>
    <button onClick={()=>ref.current?.alertAndFocus()}>聚焦并输出信息</button>
  </div>
}
