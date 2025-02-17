<template>
  <div>
    <h2>Welcome to Home</h2>
    <p v-if="user">Hello, {{ user.first_name }}</p>
    <p v-else>Loading...</p>

    <h1>Student Management</h1>
    <StudentList />

    <router-link to="/add-student">
      <button>Add Student</button><t></t>
    </router-link>

    <button @click="logout" class="logout-btn">Logout</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';
import StudentList from '../components/StudentList.vue';

const authStore = useAuthStore();
const router = useRouter();

// Computed property to safely access user data
const user = computed(() => authStore.user);
console.log(authStore.$state);
const logout = () => {
  authStore.logout();
  router.push('/login');
};
</script>

<style scoped>
div {
  font-family: 'Arial', sans-serif; 
  max-width: 800px; 
  margin: 20px auto; 
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

h2 {
  color: #2c3e50;
  font-size: 28px; 
  font-weight: bold;
  margin-bottom: 15px; 
  text-align: center; 
}

p {
  font-size: 16px;
  color: #555; 
  line-height: 1.6; 
}

h1 {
  font-size: 24px;
  color: #3498db; 
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
}

/* Logout Button */
.logout-btn {
  margin-top: 20px;
  background-color: #e74c3c; /* A more visually appealing red */
  color: white;
  padding: 12px 20px; /* Slightly larger padding */
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.logout-btn:hover {
  background-color: #c0392b; /* Darker red on hover */
}

/*  Router Link  (if you decide to use the button inside the router-link) */
a {
  text-decoration: none; /* Remove underline from the link */
}

a button {
  background-color: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

a button:hover {
  background-color: #2980b9;
}
</style>

