import api from './api/index'

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: typeof api
  }
}