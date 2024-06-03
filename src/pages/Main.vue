<template>
  <div class="container">
    <div class="welcome">Welcome to SPOTIFY</div>
    <button @click="goToAdmin">Admin</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    goToAdmin() {
      this.$router.push('/admin');
    }
  }
}
</script>

<style scoped>
.container {
  background-image: url('@/assets/x.jpeg'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome {
  font-size: 240px;
  color: white;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 40px;
  cursor: pointer;
  background-color: green;
  color: white;
}
</style>
