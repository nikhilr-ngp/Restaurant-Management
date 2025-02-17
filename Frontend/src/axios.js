// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  timeout: 10000, 
});

export default instance;
