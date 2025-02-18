<template>
  <div>
    <h1>Order Items</h1>

    <div>
      <h3>Add Order Item</h3>
      <form @submit.prevent="addOrderItem">
        <input v-model="menuItemId" type="number" placeholder="Menu Item ID" required />
        <input v-model="quantity" type="number" placeholder="Quantity" required />
        <input v-model="userId" type="number" placeholder="User ID" required />
        <button type="submit">Add Order Item</button>
      </form>
    </div>

    <div v-if="orderItems.length">
      <h3>Current Order Items</h3>
      <ul>
        <li v-for="item in orderItems" :key="item.id">
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
    };
  },
  methods: {
    async fetchOrderItems() {
      try {
        const response = await axios.get('/orders/1/items');
        this.orderItems = response.data;
      } catch (error) {
        console.error('Error fetching order items:', error);
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
  },
};
</script>
