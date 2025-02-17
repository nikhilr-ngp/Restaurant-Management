<template>
  <div class="signup-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup" class="signup-form">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p class="login-prompt">
      Already have an account? <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');

const signup = async () => {
  try {
    await authStore.signup({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
    });
    router.push('/login'); // Redirect to login after signup
  } catch (error) {
    console.error('Signup Error:', error);
  }
};
</script>

<style scoped>
/* General container styling */
.signup-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9; /* Light gray background */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Heading styling */
h2 {
  text-align: center;
  color: #2c3e50; /* Dark blue-gray */
  font-size: 28px;
}

/* Form styling */
.signup-form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 15px;
  padding: 12px;
  border: 1px solid #bdc3c7; /* Light silver border */
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #e67e22; /* Carrot orange focus */
}

/* Button styling */
button {
  padding: 12px;
  background-color: #e67e22; /* Carrot orange */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d35400; /* Darker orange on hover */
}

/* Login prompt styling */
.login-prompt {
  text-align: center;
}

.login-prompt a {
  color: #e67e22; /* Carrot orange link */
}

.login-prompt a:hover {
  text-decoration: underline;
}
</style>
