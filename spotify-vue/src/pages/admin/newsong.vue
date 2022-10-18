<template>
  <form @submit.prevent="submit" >
    <label>Title</label>
    <input type="text" name="title" v-model="title"                
/>
    <label>Image</label>
    <input type="text" name="image" v-model="image" 
    />
    <button>Add song</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
    name: "newsong",
    setup() {
       const title = ref(''); 
       const image = ref('');
       const router = useRouter();
       const submit = async () => {
           await fetch('http://localhost:3000/Songs', {
               method: 'POST',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   title: title.value,
                   image: image.value
                })
           });
           await router.push('/admin/Songs');
       }
       
       return {title, image, submit}
    }
    
}
</script>

<style>
</style>