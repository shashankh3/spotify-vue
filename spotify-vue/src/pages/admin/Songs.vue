<template>
<router-link :to="{ name: 'newsong'}" class="btn">Add Song</router-link>
  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Title</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="Song in Songs" :key="Song.id">
        <td>{{Song.id}}</td>
        <td>{{Song.title}}</td>
        <td><img :src="Song.image" :alt="Song.title" width="90" /></td>
        <td>
          <router-link :to="{ name: 'songedit', params: { id: Song.id }}" class="btn">Edit</router-link>
          <button @click="del(Song.id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {onMounted, ref} from 'vue';
export default {
  name: 'Songs',
  setup() {
    const Songs = ref([]);
    onMounted( async () => {
      const res = await fetch('http://localhost:3000/Songs');
      Songs.value = await res.json();
    })
    const del = async (id) => {
      await fetch(`http://localhost:3000/Songs/${id}`, {
        method: 'DELETE'
      })
      Songs.value = Songs.value.filter(p => p.id !== id);
    }
    return { Songs, del }
  }
}
</script>