import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tailwind/action')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="bg-gray-100 sm:bg-amber-100 lg:bg-sky-200">Hello "/tailwind/action"!

    <div className="hover:bg-red-200 hover:text-white">hover</div>
  <label htmlFor="">username:{""}
<input type="text" className="border-2 border-purple-400 focus:bg-gray-500
focus:text-white
"/>

  </label>
  <ul>
    <li className="first:text-red-100 last:text-blue-100">item1</li>
    <li className="first:text-red-100 last:text-blue-100">item2</li>
    <li className="first:text-red-100 last:text-blue-100">item3</li>
  </ul>

  <div className="has-[p,a]:text-green-300">
    <p>12</p>
    <a href="">213</a>
  </div>

  <div className="group">
    <p className="group-hover:text-sky-500">213123</p>
    <a href="">ceshi1</a>
  </div>
  
    <div>
      <p className="before:content-['#'] before:text-amber-500">before/after</p>
      <p className="after:content-['#'] after:text-sky-500">before/after</p>
    </div>

    <div>
      <p className="selection:text-red-600">word word</p>
    </div>

    <div>
      <p className="first-letter:text-3xl first-letter:font-bold first-line:tracking-wider first-line:uppercase">Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"?</p>

      <p className="">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
    </div>

    <div data-Index className="data-index:text-amber-400">
      data data
    </div>
    
    <ul className="*:text-sky-500 *:hover:text-3xl
    **:first:hover:font-bold **:last:hover:text-yellow-700
    **:[li]:font-['fangsong']
    **:[li.demo]:text-2xl
        ">
      <li>1</li>
      <li className="demo">2</li>
      <li>3</li>
    </ul>
  </div>
}
