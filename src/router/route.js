import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MobileMenu from '@/components/common-pages/MobileMenu.vue';
import AboutPage from '@/pages/AboutPage.vue';
import ReviewsPage from '@/pages/ReviewsPage.vue';


const routes = [
  { path: '/', component: MainPage },
  { path: '/mobile-menu', component: MobileMenu},
  { path: '/about-page', component: AboutPage},
  // { path: '/portfolio-page', component: PortfolioPage},
  { path: '/reviews-page', component: ReviewsPage},

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

export default router;
