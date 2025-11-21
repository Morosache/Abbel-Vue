<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import carousel1 from '/images/carousell1.webp'
import carousel2 from '/images/carousell2.webp'
import carousel3 from '/images/carousell3.webp'
import ResponsiveMenu from './ResponsiveMenu.vue';
import { Menu } from 'lucide-vue-next'


//carousel script
const photo1 = carousel1;
const photo2 = carousel2;
const photo3 = carousel3;

const carouselphotos = [photo1, photo2, photo3];

carouselphotos.forEach(src => {
  const img = new Image();
  img.src = src;
});

const currentIndex = ref(0);

let interval;
onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselphotos.length
  }, 5000)

  window.addEventListener('resize', checkWidth);
})

onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener('resize', checkWidth)

});


// show laptop menu script

const isDesktop = ref(window.innerWidth >= 1024);

function checkWidth() {
  isDesktop.value = window.innerWidth >= 1024
}






</script>

<template>
  <div class="h-[70vh] w-full relative overflow-hidden">
    <!--Menu bar-->
    <div
      class="fixed z-50 w-full h-[65px] bg-slate-600/20 flex flex-row items-center justify-between backdrop-blur-sm md:h-[85px]"
      id="top-bar">
      <img src="/images/logo.png" alt="logo" class="w-[70px] h-[60px] opacity-[100%] mx-[30px] md:w-[90px] md:h-[80px]"
        id="logo"></img>
      <router-link v-if="!isDesktop" to="/mobile-menu">
        <Menu class="mr-[30px] text-[#ffffff] md:h-[30px] md:w-[30px]" id="menu-button" />
      </router-link>
      <ResponsiveMenu v-else firstLink="About" secondLink="Most Recent" thirdLink="Portofolio"
        fourthLink="Reviews" />
    </div>

    <transition name="slide-in">
      <img :key="currentIndex" :src="carouselphotos[currentIndex]" alt="carousel image" loading="lazy"
        class="w-full h-full object-cover transition-opacity duration-700 " id="carousel-image"></img>
    </transition>
  </div>

</template>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s ease-in-out;
  position: absolute;
}

.slide-in-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
