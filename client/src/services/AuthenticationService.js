import Api from '@/services/Api'

// export an object ?
export default {
  register (credentials) {
     return Api().post('register', credentials)
  }
}
