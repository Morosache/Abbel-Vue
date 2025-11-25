import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MobileMenu from '@/components/common-pages/MobileMenu.vue';
import AboutPage from '@/pages/AboutPage.vue';


const routes = [
  { path: '/', component: MainPage },
  { path: '/mobile-menu', component: MobileMenu},
  { path: '/about-page', component: AboutPage},
  // { path: '/most-recent-page', component: MostRecentPage},
  // { path: '/portfolio-page', component: PortfolioPage},
  // { path: '/reviews-page', component: ReviewsPage},

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
