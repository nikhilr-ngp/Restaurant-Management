<template>
  <div>
    <h1>Menu Items</h1>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
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
};
</script>
