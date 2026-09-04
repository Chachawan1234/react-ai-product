import {createFileRoute,useNavigate} from '@tanstack/react-router'
export const Route=createFileRoute('/demo/')({
    component: Demo,
});
function Demo(){
    const navigate=useNavigate();
    return (<>
        <p>demo</p>
        <button onClick={()=>navigate({
            to:'/demo/about',
            search:{
                name:'小米',
                id:'uoewoq123'
            }
        })}>点击查询about</button>
    </>)
}
