import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock([{
    url: '/api/login',
    method: 'POST',
    body: () => {
        return {
            msg: '登录成功',
            data: {
                id: '1',
                message: '登录',
            }
        }
    }
},
{
    url: '/api/register',
    method: 'POST',
    body: () => {
        return {
            msg: '注册成功',
            data: {
                id: '1',
                message: '注册',
            }
        }
    }
}

])