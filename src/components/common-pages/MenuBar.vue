<script setup>
import { ref, onMounted, onUnmounted} from 'vue'
import ResponsiveMenu from './ResponsiveMenu.vue';
import { Menu } from 'lucide-vue-next';

defineProps({
    firstLink:String,
    secondLink:String,
    thirdLink:String,
    fourthLink:String,

})

const isDesktop = ref(window.innerWidth >= 1024);

function checkWidth() {
  isDesktop.value = window.innerWidth >= 1024
}


onMounted(() => {
 window.addEventListener('resize', checkWidth);
})


onUnmounted(() => {
    window.removeEventListener('resize', checkWidth)
});
</script>

<template>
    <div class="fixed z-50 w-full h-[65px] bg-slate-600/20 flex flex-row items-center justify-between backdrop-blur-sm md:h-[85px]"
        id="top-bar">
        <img src="/images/logo.png" alt="logo"
            class="w-[70px] h-[60px] opacity-[100%] mx-[30px] md:w-[90px] md:h-[80px]" id="logo"></img>
        <router-link v-if="!isDesktop" to="/mobile-menu">
            <Menu class="mr-[30px] text-[#ffffff] md:h-[30px] md:w-[30px]" id="menu-button" />
        </router-link>
        <ResponsiveMenu v-else firstLink="About" secondLink="Most Recent" thirdLink="Portofolio" fourthLink="Reviews" />
    </div>
</template>
