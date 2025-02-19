<template>
  <div class="menu-container">
    <div class="navigation-buttons">
      <button @click="goTo('dashboard')" class="nav-btn back-btn">Back</button>
      <button @click="goTo('order-items')" class="nav-btn menu-btn">Order Now</button>
    </div>
    <h1 class="main-title">Menu Items</h1>
    <div class="menu-list">
      <div v-for="item in menuItems" :key="item.id" class="menu-card" :style="{ backgroundColor: getBackgroundColor(item.name) }">
        <div class="menu-card-content">
          <h3 class="menu-item-name">{{ item.name }}</h3>
          <p class="menu-item-price">{{ item.price | currency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      menuItems: [],
    };
  },

  async mounted() {
    try {
      const response = await axios.get('/menu-items');
      this.menuItems = response.data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`);
    },
    getBackgroundColor(name) {
      const colors = [
        '#FCE7C8', // Light Orange
        '#B1C29E', // Olive Green
        '#FADA7A', // Yellow
        '#F0A04B', // Light Brown
        '#B9D6A9', // Light Green
        '#A1B3C1', // Light Blue
      ];
      
      const index = Math.abs(name.charCodeAt(0) % colors.length);
      return colors[index];
    },
  },
};
</script>

<style scoped>
/* Color Palette */
:root {
  --color-primary: #FCE7C8;
  --color-secondary: #B1C29E;
  --color-accent: #FADA7A;
  --color-dark: #F0A04B;
}


.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.nav-btn {
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 6px;
  border: 1px solid;
  cursor: pointer;
  background-color: #0d0d0d;
}

.nav-btn:hover {
  transform: scale(1.05);
}

.back-btn {
  background-color: var(--color-dark);
  color: rgb(0, 0, 0);
}

.back-btn:hover {
  background-color: #ecb789; 
}

.menu-btn {
  background-color: var(--color-accent);
  color: rgb(0, 0, 0);
}

.menu-btn:hover {
  background-color: #ffe4a7;
}


.menu-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.main-title {
  text-align: center;
  color: var(--color-dark);
  font-size: 2rem;
  margin-bottom: 20px;
}

.menu-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 0;
}

.menu-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.menu-card:hover {
  transform: scale(1.05); /* Hover effect for scaling */
}

.menu-card-content {
  text-align: center;
}

.menu-item-name {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.menu-item-price {
  font-size: 1rem;
  color: #555;
  font-weight: bold;
}
</style>
