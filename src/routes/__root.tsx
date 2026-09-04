import {createRootRoute,Outlet,HeadContent} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
// import {Link} from '@tanstack/react-router'

export const Route=createRootRoute({
    component: App,
    // tanstack SEO:
    head:()=>({
        meta:[
            {title:'茶茶丸'},
            {name:'description',
                content:'这是一个前端练习页'
            }
        ]
    })
    
});
function App(){
    return (
        <div>
            <div>
                {/* <Link to="/demo">demo </Link>
                <Link to="/demo/post/$postId" params={{postId:'123'}}>post </Link>
                <Link to="/demo/about">about </Link> */}
            </div>
            <Outlet></Outlet>
            <HeadContent></HeadContent>
            <TanStackRouterDevtools position="bottom-right"></TanStackRouterDevtools>
            {/* 挂载tanstack自带调试小工具 */}
        </div>
    )
}
