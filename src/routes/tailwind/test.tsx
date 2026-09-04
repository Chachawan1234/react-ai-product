import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="
  text-3xl
  text-sky-500 
  hover:text-amber-100 
  hover:underline
  "
  >Hello "/tailwind/test"!
  </div>
}
