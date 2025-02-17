import { defineStore } from 'pinia';
import axios from 'axios';

export const useStudentStore = defineStore('student', {
  state: () => ({
    students: [],
  }),

  actions: {
    async fetchStudents() {
      try {
        const response = await axios.get('http://127.0.0.1:3333/');
        this.students = response.data;
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    },

    
    async addStudent(student) {
      try {
        const response = await axios.post('http://127.0.0.1:3333/students', student);
        this.students.push(response.data);
      } catch (error) {
        console.error('Error adding student:', error);
      }
    },

    async deleteStudent(id) {
      try {
        await axios.delete(`http://127.0.0.1:3333/students/${id}`);
        this.students = this.students.filter(student => student.id !== id);
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    },
    async updateStudent(student) {
        try {
          const response = await axios.put(`http://127.0.0.1:3333/students/${student.id}`, student);
          const index = this.students.findIndex(s => s.id === student.id);
          if (index !== -1) {
            this.students[index] = response.data;
          }
        } catch (error) {
          console.error('Error updating student:', error);
        }
      }
      
      
  }
});
