<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import carousel1 from '/images/carousell1.webp'
import carousel2 from '/images/carousell2.webp'
import carousel3 from '/images/carousell3.webp'
import MenuBar from '../common-pages/MenuBar.vue';


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
});

onUnmounted(() => {
  clearInterval(interval)
});






</script>

<template>
  <div class="h-[70vh] w-full relative overflow-hidden lg:h-[75vh]">
    <!--Menu bar-->
    <MenuBar firstLink="About" secondLink="Most Recent" thirdLink="Portofolio" fourthLink="Reviews"/>

    <transition name="slide-in">
      <img :key="currentIndex" :src="carouselphotos[currentIndex]" alt="carousel image" loading="lazy"
        class="w-full h-full object-cover object-center transition-opacity duration-700 " id="carousel-image"></img>
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
