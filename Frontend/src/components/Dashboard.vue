<template>
  <div class="dashboard-container">
    <h2>Welcome to the ITC Hotel</h2>
    <div class="button-container">
      <button @click="goTo('reservations')">Dine-In</button>
      <button @click="goTo('order-items')">Order Online</button>
      <button @click="goTo('menu-items')">Menu</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`)
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  text-align: center;
  margin-top: 50px;
}

h2 {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:nth-child(1) {
  background-color: #128115;
  color: white;
}

button:nth-child(1):hover {
  background-color: #127017;
}

button:nth-child(2) {
  background-color: #00526d;
  color: white;
}

button:nth-child(2):hover {
  background-color: #003f5c;
}

button:nth-child(3) {
  background-color: #ba1104; 
  color: white;
}

button:nth-child(3):hover {
  background-color: #d21313;
}
</style>
