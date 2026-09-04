import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/text')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/tailwind/size"!

    <div>
      <p className="text-(--main-color)">自定义样式配合使用</p>
      <p className="text-[30px]">自定义字体</p>
      <p className="font-[fangsong]">自定义字体样式</p>
    </div>

    <p className="text-lg">font-size</p>
    <p className="text-sm/6">font-size</p>
    <p className="leading-2">line-height</p>
    <p className="font-medium">font-weight</p>
    <p className="-tracking-widest">letter-spacing</p>

    <ul className="list-decimal p-10">
      <li>11</li>
      <li>111</li>
    </ul>

    <p className="text-center">text align</p>

    <p className='underline decoration-red-300 decoration-dotted'>下划线</p>
    <p className='line-through decoration-blue-300'>删除线</p>
    <p className='no-underline'>无下划线</p>

  </div>
}
