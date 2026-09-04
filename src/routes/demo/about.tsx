import { createFileRoute,useNavigate } from '@tanstack/react-router'
interface Isearch{
  name ?: string,
  id ?: string
}
export const Route = createFileRoute('/demo/about')({
  component: RouteComponent,
  loaderDeps:(deps:{search:Isearch})=>{
    console.log('deps',deps);
    return {
      name:deps.search.name,
      id:deps.search.id,
      // loaderdeps监听到return中的数据变化时，执行loader并将deps放入其中
    }
  },
  loader:(info)=>{
    fetch('api/demo/about'+info.deps.id);
    // 这个deps是loaderdeps返回的
    console.log("info",info);
    // 模拟接口请求，loader主要获取文章详情，查询分页数据等。
    // loader加载器查询信息：可用info里面的params，location里面的search
    return ["about","demo"];
  },
  staleTime:50_00,
  // shouldReload:(info)=>{
  //   console.log("重新加载",info);
  //   return false;
  //   // 必须返回一个布尔值，true表示每次切换需要重新加载
  // }
})

function RouteComponent() {
  const loaderData=Route.useLoaderData();
  // useLoaderData获取数据
  console.log("loaderData",loaderData);
  const search=Route.useSearch();
  console.log(search);
  const navigate=useNavigate();
  function handleNav(){
    navigate({
      to:"/demo"
    })
  }
  function handlePost(){
    navigate({
      to:'/demo/post/$postId',
      params:{postId:'111'}
    })
  }
  return (
  <div>Hello "/demo/about"!
    <button onClick={handleNav}>点击回到demo</button>
    <button onClick={handlePost}>点击前往post</button>
    <button onClick={()=>{
      navigate({
        to:'/demo/about',
        search:{
          name:'lisi',
          id: Date.now(),
        }
      })
    }}>重新搜索</button>
  </div>)
}
