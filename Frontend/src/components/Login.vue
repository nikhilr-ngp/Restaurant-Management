<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="submitLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="form.password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post('http://127.0.0.1:3333/login', this.form)

        localStorage.setItem('user', JSON.stringify(response.data))

        this.$router.push('/dashboard')
      } catch (error) {
        this.error = error.response?.data?.message || 'Invalid credentials'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

h2 {
  text-align: center;
}

form div {
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
}
</style>
