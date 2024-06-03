<template>
  <div class="sidebar">
    <ul class="side-menu">
        <li><router-link :to="{ name: 'Songs'}">Songs</router-link></li>
        <li><router-link :to="{ name: 'newsong'}" >Add Song</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
name: 'SideBar'
}
</script>

<style>

</style>