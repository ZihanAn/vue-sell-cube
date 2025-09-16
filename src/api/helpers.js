import axios from 'axios'

const ERR_OK = 0
export function get (url) {
  return function (params) { // 函数柯里化
    return axios.get(url, {
        params
    }).then((res) => {
        const { errno, data } = res.data
        if (errno === ERR_OK) {
            return data
        }
        return Promise.reject(new Error(data.msg))
    }).catch(err => {
        console.log(err)
    })
  }
}
