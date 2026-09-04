import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tailwind/layout"!
    <div>
      <h2>flex布局</h2>
      <div className="flex flex-center w-full h-200 bg-yellow-100
      items-center justify-center">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
    <div>
      <h2>grid布局</h2>
      <div className="grid grid-row-2 grid-col-3 bg-sky-300 h-300 w-full justify-items-center items-center">
        <div>grid</div>
        <div>grid</div>
        <div>grid</div>
        <div>grid</div>
      </div>
    </div>
  </div>
}
