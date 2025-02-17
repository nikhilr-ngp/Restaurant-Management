<template>
  <div>
    <h1>Reservations</h1>

    <div>
      <h3>Create Reservation</h3>
      <form @submit.prevent="createReservation">
        <input v-model="userId" type="number" placeholder="User ID" required />
        <input v-model="reservationTime" type="datetime-local" required />
        <input v-model="numGuests" type="number" placeholder="Number of Guests" required />
        <select v-model="status">
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <button type="submit">Create Reservation</button>
      </form>
    </div>

    <div v-if="reservations.length">
      <h3>Current Reservations</h3>
      <ul>
        <li v-for="reservation in reservations" :key="reservation.id">
          {{ reservation.id }} - {{ reservation.status }} - {{ reservation.reservation_time }}
          <button @click="deleteReservation(reservation.id)">Delete</button>
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
        this.fetchReservations(); // Refresh reservations list
      } catch (error) {
        console.error('Error creating reservation:', error);
      }
    },

    async deleteReservation(id) {
      try {
        const response = await axios.delete(`/reservations/${id}`);
        console.log('Reservation deleted:', response.data);
        this.fetchReservations(); // Refresh reservations list
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
