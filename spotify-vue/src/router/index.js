import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Admin from '../pages/admin/Admin.vue'
import Songs from '../pages/admin/Songs.vue'
import newsong from '../pages/admin/newsong.vue'
import songedit from '../pages/admin/songedit.vue'


const routes = [
   {
     path: '/',
    name: 'Main',
     component: Main
   },
   
   {
    path: '/admin',
   name: 'Admin',
    component: Admin,
    children: [
{
      path: 'Songs',
      component: Songs,
      name: 'Songs'
},
{
  path: 'newsong/create',
  component: newsong,
  name: 'newsong'
},
{
  path: 'songedit/:id/edit',
  component: songedit,
  name: 'songedit',
  props: true
},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
