<template>
  <Nav />
  <div class="wrraper">
    <div class="left-content">
      <SideBar />
    </div>
    <div class="right-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'Admin',
  components: { Nav, SideBar }
};
</script>

<style
SideBar>
</style>