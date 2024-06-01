<template>
<div class="welcome">welcome to SPOTIFY</div>
<button @click="goToAdmin">Admin</button>
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

<style scoped > 
button{
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: green;
  position: absolute;
  left: 35%;
  width: 25%;
}
</style>
