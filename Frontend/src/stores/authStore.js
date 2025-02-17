import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null  
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    async restoreSession() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        await this.fetchUser();
      }
    },

    async signup(userData) {
      try {
        const response = await axios.post('http://127.0.0.1:3333/signup', userData);
        this.token = response.data.token;
        this.user = response.data.user;

        localStorage.setItem('token', this.token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },

    async login(credentials) {
      try {
        const response = await axios.post('http://127.0.0.1:3333/login', credentials);
        
        this.token = response.data.token;
        this.user = response.data.user;

        // Save token to localStorage
        localStorage.setItem('token', this.token);

        // Attach token to Axios default headers for subsequent requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      } catch (error) {
        throw error.response.data;
      }
    },

    async fetchUser() {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const response = await axios.get('http://127.0.0.1:3333/me', {
            headers: { Authorization: `Bearer ${token}` }
        });

        this.user = response.data.user;
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    }
  }
});
