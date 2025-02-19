<template>
  <div class="order-items-container">
    <div class="navigation-buttons">
      <button @click="goTo('dashboard')" class="nav-btn back-btn">Back</button>
      <button @click="goTo('menu-items')" class="nav-btn menu-btn">Menu</button>
    </div>
    <h1 class="main-title">Order Items</h1>


    <div class="add-order-item-section">
      <h3 class="section-title">Add Order Item</h3>
      <form @submit.prevent="addOrderItem" class="order-form">
        <select v-model="menuItemId" required class="order-input">
          <option value="" disabled selected>Select Menu Item</option>
          <option v-for="menuItem in menuItems" :key="menuItem.id" :value="menuItem.id">
            {{ menuItem.name }}
          </option>
        </select>
        <input v-model="quantity" type="number" placeholder="Quantity" required class="order-input"/>
        <input v-model="userId" type="number" placeholder="User ID" required class="order-input"/>
        <button type="submit" class="submit-button">Add Order Item</button>
      </form>
    </div>

    <div v-if="orderItems.length" class="current-order-items">
      <h3 class="section-title">Current Order Items</h3>
      <ul class="order-list">
        <li v-for="item in orderItems" :key="item.id" class="order-item">
          {{ item.menuItem.name }} - {{ item.quantity }} x {{ item.price }} = {{ item.subtotal }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      menuItemId: '',
      quantity: '',
      userId: '',
      orderItems: [],
      menuItems: []
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`);
    },
    async fetchOrderItems() {
      try {
        const response = await axios.get('/orders/1/items');
        this.orderItems = response.data;
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    },

     // Fetch menu items
    async fetchMenuItems() {
      try {
        const response = await axios.get('/menu-items');
        this.menuItems = response.data;
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    },

    async addOrderItem() {
      try {
        const orderData = {
          menuItemId: this.menuItemId,
          quantity: this.quantity,
          userId: this.userId, 
        };

        console.log('Adding order item with data:', orderData);

        const response = await axios.post(`/orders/1/items`, orderData);

        console.log('Order item added:', response.data);

        this.fetchOrderItems();
        
        this.menuItemId = '';
        this.quantity = '';
        this.userId = ''; 
      } catch (error) {
        console.error('Error adding order item:', error.response ? error.response.data : error);
      }
    },
  },
   mounted() {
    this.fetchOrderItems();
    this.fetchMenuItems();
  },
};
</script>

<style scoped>
/* Color Palette */
:root {
  --color-primary: #F8F3D9;
  --color-secondary: #EBE5C2;
  --color-accent: #B9B28A;
  --color-dark: #504B38;
}

.order-items-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 30px;
  background-color: var(--color-primary);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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

.main-title {
  text-align: center;
  color: var(--color-dark);
  margin-bottom: 20px;
  font-size: 2rem;
}

.section-title {
  color: var(--color-dark);
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.add-order-item-section,
.current-order-items {
  margin-bottom: 30px;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-input {
  padding: 12px;
  border-radius: 6px;
  font-size: 1rem;
  border-color:#504B38;
}

.submit-button {
  padding: 12px 20px;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  background-color:#B9B28A;
}

.submit-button:hover {
  background-color: #a68f5c;
}

.order-list {
  list-style: none;
  padding: 0;
}

.order-item {
  background-color:#F8F3D9;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 1.1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}
</style>
