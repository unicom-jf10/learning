<template>
  <div>
    <h1>Register</h1>
    <input
      type='email'
      name='email'
      v-model="email"
      placeholder='email'
    />
    <br>
    <input
      type='password'
      name='password'
      v-model="password"
      placeholder='password'
    />
    <br>
    <button
      @click="register">
      Register
    </button>
    <br>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abbm',
      password: '123'
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
