import { createFileRoute,useNavigate } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import imgLogin from '../assets/login.jpg'
import { useState } from 'react'
import { loginApi,registerApi,loginPhoneApi } from '@/api/auth'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: '注册/登录页',

      },
      {
        name: 'description',
        content: '这是登录页面(*V<)~'
      }
    ]
  })
})


function RouteComponent() {

  // 判断用户登录/注册
  const [isLogin, setIsLogin] = useState<boolean>(true)
  
  const navigate=useNavigate();

  // useMutation实现登录页面逻辑
const loginMutation=  useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log(data);
      navigate({
        to:'/',
      }
      )
    },
    onError: (error) => {
      console.log(error);
    }
})
const registerMutation=  useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log(data);
      navigate({
        to:'/'
      }
      )
    },
    onError: (error) => {
      console.log(error);
    }
})
const loginPhoneMutation=  useMutation({
    mutationFn: loginPhoneApi,
    onSuccess: (data) => {
      console.log(data);
      navigate({
        to:'/'
      }
      )
    },
    onError: (error) => {
      console.log(error);
    }
})

// 登录表单处理：
function handleLogin(formData:FormData){
  loginMutation.mutate({
    username:formData.get("username") as string,
    password:formData.get("password") as string,
  });
}

function handleRegister(formData:FormData){
  registerMutation.mutate({
    username:formData.get("username") as string,
    password:formData.get("password") as string,
  });
}

function handlePhoneLogin(formData:FormData){
  loginPhoneMutation.mutate({
    phone:formData.get("phone") as string,
    // password:formData.get("password") as string,
  });
}

// 设置标题
// const [title,setTitle] =useState<string>('')
//   useLayoutEffect(()=>{
//   setTitle('登录/注册');
// },[])
// SEO设置(原生JS)：
// const seo=(title:string,name:string,content:string)=>{
//   document.title=title;
//   const meta=document.createElement('meta');
//   meta.name=name;
//   meta.content=content;
//   document.head.appendChild(meta);
// };
// seo('登录页面','description','这是一个登录页面')

// 手机登录表单
function phoneForm() {
  // console.log(import.meta.env.VITE_VERSION)
  return (
    <div>
      <fieldset className="fieldset mt-2 shadow-sm border-base-300 rounded-box w-xs border p-2">
        <label className="label">手机号</label>
        <label className="input validator">
          +86
          <input name="phone" type="text" className="" placeholder="phoneNumber"
            required
            pattern='^1[3-9]\d{9}$'
          />
        </label>
        <p className="validator-hint hidden">请输入正确的手机号</p>

        <label className="label">验证码</label>
        <div className="join">
          <label className="join-item grow border-0">
            <input name="code" type="text" placeholder="验证码"
              className="input validator"
              required
              pattern='[0-9]{4,}'
              title="验证码为数字且至少为4位" />
            <p className="validator-hint hidden">请输入有效验证码</p>
          </label>
          <button className="btn join-item">获取验证码</button>
        </div>

        <button className="btn mt-5 btn-neutral">登录/注册</button>
      </fieldset>
    </div>
  )
}
// 登录/注册表单
function accountForm(btnName: string) {
  return (
    <div>
      <fieldset className="fieldset mt-2 shadow-sm border-base-300 rounded-box w-xs border p-2">

        <label className="label">Name</label>
        <input name="username" type="text" className="input validator" placeholder="Name" required />
        <p className="validator-hint hidden">请输入有效名称</p>

        <label className="label">Password</label>
        <input name="password" type="password" className="input validator" required
          placeholder="Password"
        />
        <p className="validator-hint hidden">请输入有效密码</p>

        <button className="btn btn-neutral mt-5">{btnName}</button>
      </fieldset>
    </div>
  )
}
// 登录渲染
function loginRender() {

  return (

    <div>
      <div className="tabs tabs-border w-xs">
        <input type="radio" name="my_tabs_2" className="tab" aria-label="账号登录" defaultChecked />
        <div className="tab-content bg-base-100">
          <div>
            <form action={handleLogin}>{accountForm('登录')}</form>
            <div className="text-right w-full text-[16px] cursor-pointer" onClick={() => setIsLogin(false)}>去注册</div>
          </div>

        </div>

        <input type="radio" name="my_tabs_2" className="tab" aria-label="手机登录" />
        <div className="tab-content bg-base-100">
          <form action={handlePhoneLogin}>{phoneForm()}</form>
        </div>
      </div>
    </div>
  )
}
// 注册渲染
function registerRender() {
  return (
    <div>
      <div>
        <form action={handleRegister}>{accountForm('注册')}</form>
      </div>
      <div className="text-right w-full text-[16px] cursor-pointer" onClick={() => setIsLogin(true)}>去登录</div>
    </div>
  )
}

return (
  <div className="bg-base-200 w-full h-screen 
  flex flex-row justify-center items-center
  ">
    {/* react原生组件实现seo */}
    {/* <title>{title}</title> */}
    {/* <meta name="description" content="登录页面" /> */}


    <div className="flex flex-row w-[800px] h-[500px] shadow-lg bg-base-100 rounded-lg">
      <div className="flex-1">
        {/* 使左右宽高1v1 */}
        <img src={imgLogin} alt="login img" className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-xs">
          <div>
            {isLogin ? loginRender() : registerRender()}
          </div>
          <div className="">
            <div className="divider">其它登录方式</div>
            <div className="btn mt-0.5 w-full">三方登录按钮</div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
