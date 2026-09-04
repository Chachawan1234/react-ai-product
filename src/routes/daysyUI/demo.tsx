import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/daysyUI/demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/daysyUI/demo"!
    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>(document.getElementById('my_modal_1') as HTMLDialogElement).showModal()}>open modal</button>
 {/* TypeScript 类型断言 */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    
    <button className="btn btn-success btn-lg">btn demo</button>
  </div>
}
