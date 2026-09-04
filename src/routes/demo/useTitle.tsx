import { createFileRoute } from '@tanstack/react-router'
import {useLayoutEffect,useDebugValue} from 'react'
export const Route = createFileRoute('/demo/useTitle')({
  component: RouteComponent,
})
function useTitleHook(title:string){
  useLayoutEffect(()=>{
    document.title=title;
  },[title])
  useDebugValue(`title:${title}`)
  return title;
}

function RouteComponent() {
  useTitleHook('标题变化');
  return <div>
    Hello "/demo/useTitle"!
  </div>
}
