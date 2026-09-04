import { defineConfig, loadEnv } from 'vite'
import {tanstackRouter} from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server'

// https://vite.dev/config/
export default defineConfig((config)=>{
  console.log(config);
  const env=loadEnv(config.mode,process.cwd())
  console.log(env)
  return {
  plugins: [tanstackRouter({
    target:"react",
    autoCodeSplitting:true,
    // 实现代码分割
  }),react(),
tailwindcss(),
// 只有mock模式下才会触发mock插件
config.mode==="mock" && mockDevServerPlugin(),
// mockDevServerPlugin(), 
],
//vite服务地址
server: {
  // 可自定义端口号
    port:5173,
    // host: "0.0.0.0" 是 Vite 开发服务器的一个配置项，用于控制服务器监听的网络接口（IP 地址）
    host:"0.0.0.0",
    proxy: {
      '^/api':env.VITE_SERVER_URL
      // '^/api': 'http://127.0.0.1:5173',
    },
  },
// 路径别名配置
resolve:{
   alias:{
    // 用path解析绝对路径
    '@':path.resolve(__dirname,"src")
   },
  //  配置扩展名称
   extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
}
}
})
