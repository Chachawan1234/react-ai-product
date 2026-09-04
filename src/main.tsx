// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
const router = createRouter({
  routeTree,
  pathParamsAllowedCharacters: ["$", "@"],
  // defaultStaleTime:10_000,  //毫秒，共10s，表示缓存时间，也就是把缓存看作“新”的时间
  // defaultPreload:'render',
})
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const client=new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router}>

    </RouterProvider>
  </QueryClientProvider>
)
