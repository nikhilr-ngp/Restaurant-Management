<template>
  <div class="dashboard-container">
    <header class="navbar">
      <h2>Welcome to the ITC Grand Chola</h2>
    </header>

    <div class="button-container">
      <button @click="goTo('reservations')" class="btn btn-dine-in">Dine-In</button>
      <button @click="goTo('order-items')" class="btn btn-order-online">Order Online</button>
      <button @click="goTo('menu-items')" class="btn btn-menu">Menu</button>
    </div>

    <!-- Image Gallery with Horizontal Scrolling Animation -->
    <!-- <div class="image-gallery">
      <img src="@/assets/images/Food1.jpg" alt="Food 1" class="food-image" />
      <img src="@/assets/images/Food2.jpg" alt="Food 2" class="food-image" />
      <img src="@/assets/images/Food3.jpg" alt="Food 3" class="food-image" />
      <img src="@/assets/images/Food4.jpg" alt="Food 4" class="food-image" />
      <img src="@/assets/images/Food5.jpg" alt="Food 5" class="food-image" />
      <img src="@/assets/images/Food6.jpg" alt="Food 6" class="food-image" />
      <img src="@/assets/images/Food7.jpg" alt="Food 7" class="food-image" />
      <img src="@/assets/images/Food8.jpg" alt="Food 8" class="food-image" />
      <img src="@/assets/images/Food9.jpg" alt="Food 9" class="food-image" />
      <img src="@/assets/images/Food10.jpg" alt="Food 10" class="food-image" />
      <img src="@/assets/images/Food11.jpg" alt="Food 11" class="food-image" />
      <img src="@/assets/images/Food12.jpg" alt="Food " class="food-image" />
    </div>

    <div class="youtube-video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IQ93vuXz3Lc?si=3tXYpoR1ZIY3hpZO"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div> -->

    <div class="contact-container">
      <button @click="callUs" class="btn btn-call">Call</button>
      <button @click="emailUs" class="btn btn-email">Email</button>
      <button @click="viewLocation" class="btn btn-location">Location</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(`/${route}`);
    },
    callUs() {
      // Replace with your phone number
      window.location.href = 'tel:+1234567890';
    },
    emailUs() {
      window.location.href = 'mailto:nikhilsuresh86@example.com';
    },
    viewLocation() {
      window.location.href = 'https://maps.app.goo.gl/BqLyELTZEaTADic17';
    }
  }
}
</script>

<style scoped>
:root {
  --color-primary: #F8F3D9;
  --color-secondary: #EBE5C2;
  --color-accent: #B9B28A;
  --color-dark: #504B38;
}

.dashboard-container {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: var(--color-primary);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
}

/* Navigation Bar */
.navbar {
  background-color: var(--color-secondary);
  color: var(--color-dark);
  padding: 20px;
  border-radius: 12px 12px 0 0;
  margin-bottom: 20px;
}

.navbar h2 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
}

/* Button Styles */
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
  color: var(--color-primary);
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
}

.btn-dine-in {
  background-color: #A0C878; /* Green */
}

.btn-order-online {
  background-color: #7886C7; /* Blue */
}

.btn-menu {
  background-color: #E195AB; /* Red */
}

/* Image Gallery with Scrolling Animation */
.image-gallery {
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin-bottom: 30px;
  overflow: hidden; /* Hide overflow */
  position: relative;
  animation: scroll-left 10s linear infinite; /* Animation for scrolling */
}

.food-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

/* Hover effect */
.food-image:hover {
  transform: scale(1.1);
}

/* Animation for scrolling images from right to left */
@keyframes scroll-left {
  0% {
    transform: translateX(100%); /* Start offscreen to the right */
  }
  100% {
    transform: translateX(-100%); /* End offscreen to the left */
  }
}

/* Contact Container */
.contact-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-call,
.btn-email,
.btn-location {
  background-color: var(--color-accent);
  color: var(--color-dark);
  font-size: 1rem;
  padding: 10px 20px;
}
</style>
