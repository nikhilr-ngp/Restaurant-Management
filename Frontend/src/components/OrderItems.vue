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
      userId: '', // Added userId to the data model
      orderItems: [],
    };
  },
  methods: {
    async fetchOrderItems() {
      try {
        const response = await axios.get('/orders/1/items'); // Assuming order ID = 1 for now
        this.orderItems = response.data;
      } catch (error) {
        console.error('Error fetching order items:', error);
      }
    },

    async addOrderItem() {
      try {
        // Prepare the data to be sent
        const orderData = {
          menuItemId: this.menuItemId,
          quantity: this.quantity,
          userId: this.userId, // Include userId in the request payload
        };

        // Log the data to verify it's correct
        console.log('Adding order item with data:', orderData);

        const response = await axios.post(`/orders/1/items`, orderData);

        // Log the response for debugging
        console.log('Order item added:', response.data);

        // Refresh order items list
        this.fetchOrderItems();
        
        // Clear the input fields
        this.menuItemId = '';
        this.quantity = '';
        this.userId = ''; // Clear userId input
      } catch (error) {
        // Log the error details
        console.error('Error adding order item:', error.response ? error.response.data : error);
      }
    },
  },
  mounted() {
    this.fetchOrderItems(); // Fetch order items when component is mounted
  },
};
</script>
