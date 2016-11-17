import store from './store'
// 全局错误处理，全局loading
import { setFetching } from './store/actions'
export default function (request, next) {
  setFetching(store, true)
  next((res) => {
    setFetching(store, false)
  })
}
