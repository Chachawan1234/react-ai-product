// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 应用版本
  readonly VITE_VERSION: string
  
  // 服务器地址
  readonly VITE_SERVER_URL: string
  
  // 可选：其他常用环境变量
  // readonly VITE_API_URL: string
  // readonly VITE_APP_TITLE: string
  // readonly VITE_DEBUG: string
  // readonly VITE_ENABLE_MOCK: string
}
// 识别环境变量
interface ImportMeta {
  readonly env: ImportMetaEnv
}