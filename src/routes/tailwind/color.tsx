import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/color')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tailwind/color"!
    <h2 className="text-sky-300/35">colors opacity</h2>
    <h2 className="text-my-1">colors 全局自定义</h2>
    <h2 className="text-main">colors 自定义</h2>
  </div>
}
