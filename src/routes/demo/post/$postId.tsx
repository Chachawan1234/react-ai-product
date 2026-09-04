import { createFileRoute,useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/demo/post/$postId')({
  component: RouteComponent,
})


function RouteComponent() {
  // 1.直接调用useParams获取params参数
  // const params=useParams({
  //   strict:false,
  //   // 模糊匹配
  // })

  // Route.useParams获取params参数,不用定义strict
  const params=Route.useParams();
  console.log(params)
  return <div>Hello "/demo/post/$postId"!</div>
}
