<template>
  <div class="reservations-container">
    <div class="navigation-buttons">
      <button @click="goTo('dashboard')" class="nav-btn back-btn">Back</button>
      <button @click="goTo('menu-items')" class="nav-btn menu-btn">Menu</button>
    </div>

    <h1 class="main-title">Reservations</h1>

    <div class="reservation-form">
      <h3 class="section-title">Create Reservation</h3>
      <form @submit.prevent="createReservation">
        <input v-model="userId" type="number" placeholder="User ID" required />
        <input v-model="reservationTime" type="datetime-local" required />
        <input v-model="numGuests" type="number" placeholder="Number of Guests" required />
        <select v-model="status">
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button type="submit" class="submit-btn">Create Reservation</button>
      </form>
    </div>

    <div v-if="reservations.length" class="reservations-list">
      <h3 class="section-title">Current Reservations</h3>
      <ul>
        <li v-for="reservation in reservations" :key="reservation.id" class="reservation-item">
          {{ reservation.id }} - {{ reservation.status }} - {{ reservation.reservation_time }}
          <button @click="deleteReservation(reservation.id)" class="delete-btn">Delete</button>
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
      userId: '',
      reservationTime: '',
      numGuests: '',
      status: 'pending',
      reservations: [],
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`);
    },
    async fetchReservations() {
      try {
        const response = await axios.get('/reservations');
        this.reservations = response.data;
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    },

    async createReservation() {
      try {
        const response = await axios.post('/reservations', {
          user_id: this.userId,
          reservation_time: this.reservationTime,
          numGuests: this.numGuests,
          status: this.status,
        });
        console.log('Reservation created:', response.data);
        this.fetchReservations(); 
      } catch (error) {
        console.error('Error creating reservation:', error);
      }
    },

    async deleteReservation(id) {
      try {
        const response = await axios.delete(`/reservations/${id}`);
        console.log('Reservation deleted:', response.data);
        this.fetchReservations(); 
      } catch (error) {
        console.error('Error deleting reservation:', error);
      }
    },
  },
  mounted() {
    this.fetchReservations(); 
  },
};
</script>

<style scoped>
/* Color Palette */
:root {
  --color-primary: #FCE7C8; /* Soft Peach */
  --color-secondary: #B1C29E; /* Sage Green */
  --color-accent: #FADA7A; /* Light Yellow */
  --color-dark: #F0A04B; /* Warm Orange */
}

.reservations-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-primary);
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
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
}

.section-title {
  color: var(--color-dark);
}

.reservation-form {
  border: 1px solid var(--color-dark);
  border-radius: 6px;
  padding: 20px;
}

.reservation-form form {
  display: flex;
  flex-direction: column;
}

input, select {
  padding: 10px;
  border: 1px solid;
  border-color: #0d0d0d;
  border-radius: 6px;
  margin-bottom: 10px;
}

.submit-btn {
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #E7D283;
  color: rgb(0, 0, 0);
}

.submit-btn:hover {
  background-color: #f8ad6b; 
}

.reservations-list ul {
  list-style-type: none;
  padding: 0;
}

.reservation-item {
  background-color: var(--color-secondary);
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 15px;
  border-color: #0d0d0d;
}

.reservation-item:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
}

.delete-btn {
  background-color: #f44336; /* Red */
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
}

.delete-btn:hover {
  background-color: #d32f2f; /* Darker red on hover */
}
</style>
