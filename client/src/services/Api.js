import axios from 'axios'

// export a function ?
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
