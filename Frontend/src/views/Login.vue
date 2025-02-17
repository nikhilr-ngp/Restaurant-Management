<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="password" placeholder="Password" type="password" required />
      <button type="submit">Login</button>
    </form>
    <p class="signup-prompt">Don't have an account? <router-link to="/signup">Sign up</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value
    });
    router.push('/home');
  } catch (error) {
    console.error('Login Error:', error);
  }
};
</script>

<style scoped>
/* General container styling */
.login-container {
  max-width: 400px; /* Limit width for better readability */
  margin: 50px auto; /* Center the container */
  padding: 20px;
  background-color: #ffffff; /* White background for the form */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

/* Heading styling */
h2 {
  text-align: center; /* Center the heading */
  color: #333; /* Darker text color */
  font-size: 28px; /* Larger font size for emphasis */
}

/* Form styling */
.login-form {
  display: flex;
  flex-direction: column; /* Stack inputs vertically */
}

input {
  margin-bottom: 15px; /* Space between inputs */
  padding: 12px; /* Padding inside the input fields */
  border: 1px solid #ccc; /* Light border */
  border-radius: 5px; /* Rounded corners for inputs */
  font-size: 16px; /* Font size for inputs */
  transition: border-color 0.3s ease; /* Transition effect on focus */
}

input:focus {
  border-color: #3498db; /* Change border color on focus */
}

/* Button styling */
button {
  padding: 12px;
  background-color: #3498db; /* Primary button color */
  color: white;
  border: none;
  border-radius: 5px; /* Rounded corners for button */
  font-size: 16px; /* Font size for button text */
  cursor: pointer;
  transition: background-color 0.3s ease; /* Transition effect on hover */
}

button:hover {
  background-color: #2980b9; /* Darker shade on hover */
}

/* Signup prompt styling */
.signup-prompt {
  text-align: center; /* Center the prompt text */
}

.signup-prompt a {
  color: #3498db; /* Link color matching the button */
}

.signup-prompt a:hover {
  text-decoration: underline; /* Underline effect on hover for links */
}
</style>
