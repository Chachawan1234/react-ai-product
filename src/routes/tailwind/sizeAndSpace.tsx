import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/sizeAndSpace')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tailwind/sizeAndSpace"!
    
{/* 尺寸相关 */}
  <p className="w-sm">111</p>
  <p className="w-xl">111</p>
  <p className="w-0.5">111</p>
  <p className="w-full">111</p>
  <p className="w-88">111</p>

{/* 间距相关 */}
  <p className="p-0.8">Hello</p>
  <p className="px-12">Hello</p>
  <p className="py-36">Hello</p>
  <p className="ml-0.7">Hello</p>
  <p className="mt-23">Hello</p>
  
  </div>
}
