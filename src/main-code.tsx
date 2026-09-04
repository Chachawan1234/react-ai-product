// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider,createRouter,createRootRoute,createRoute,Outlet } from '@tanstack/react-router'
// import {routeTree} from './routeTree.gen'
const rootRoute=createRootRoute({
  component:()=>{
    return (
      <>
      root demo
      <Outlet></Outlet>
      </>
    )
  }
})
const demoRoute=createRoute({
  getParentRoute:()=>rootRoute,
  path:'/demo',
  component:()=>{
    return (
      <p>
        demo route
      </p>
    )
  }
})
const aboutRoute=createRoute({
  getParentRoute:()=>rootRoute,
  path:'/demo/about',
  component:()=>{
    return (
      <p>
        about route
      </p>
    )
  }
})
const routeTree=rootRoute.addChildren([demoRoute,aboutRoute]);
// 代码路由的routeTree由根路径添加孩子路由获得。
const router=createRouter({routeTree});
// declare module "@tanstack/react-router"{
//   interface Register{
//     router: typeof router;
//   }
// }
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
