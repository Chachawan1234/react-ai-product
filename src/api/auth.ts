// 登录api
export async function loginApi(params: {
    username: string,
    password: string,
}) {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}

// 手机登录api
export async function loginPhoneApi(params: {
    phone: string,
    // password: string,
}) {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}
// 注册接口
export async function registerApi(params: {
    username: string,
    password: string,
}) {
    return fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
    }).then((res) => res.json());
}
