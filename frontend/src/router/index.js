import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Register from '../views/Register.vue';
import Login from '../views/Register.vue';
import Course from '../views/Course.vue';
import Roadmap from '../views/roadmap.vue';
import Blog from '../views/Blog.vue';
import CreateCourse from '../views/CreateCourse.vue';
import EditCourse from '../views/EditCourse.vue';
import CourseVideos from '../views/CourseVideos.vue';
import PersonalPage from '../views/PersonalPage.vue';
import Lesson from '../views/Lesson.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/course',
      name: 'course',
      component: Course
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: Roadmap
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/createcourse',
      name: 'createcourse',
      component: CreateCourse
    },
    {
      path: '/editcourse/:id',
      name: 'editcourse',
      props: true,
      component: EditCourse
    },
    {
      path: '/coursevideos',
      name: 'coursevideos',
      component: CourseVideos
    },
    {
      path: '/personalpage',
      name: 'personalpage',
      component: PersonalPage
    },
    {
      path: '/lesson',
      name: 'lesson',
      component: Lesson
    },
  ]
})

export default router
