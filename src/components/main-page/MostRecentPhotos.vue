<script setup>
import { Images } from 'lucide-vue-next'
import { MoveUpRight } from 'lucide-vue-next'
import show1 from '/images/show1.webp'
import show2 from '/images/show2.webp'
import show3 from '/images/show3.webp'
import show4 from '/images/show4.webp'
import show5 from '/images/show5.webp'
import show6 from '/images/show6.webp'
import show7 from '/images/show7.webp'
import show8 from '/images/carousell1.webp'
import show9 from '/images/carousell2.webp'
import show10 from '/images/carousell3.webp'


const photos = [show5, show2, show3, show1, show10, show6, show9, show4, show7, show8]


</script>

<template>
    <div class="p-[30px] mt-[30px] mb-[20px]">
        <div class="flex flex-row items-center gap-1 border-l-2">
            <Images class="ml-[4px] w-[19px] h-[20px] md:w-[29px] md: h-[30px]" />
            <p class="recent-photos-title text-[15px] font-light">My most</p>
            <p class="recent-photos-title text-[15px] font-medium">RECENT</p>
            <p class="recent-photos-title text-[15px] font-medium text-[#F9C74F]">PHOTOS</p>
        </div>

        <div class="masonry mt-[30px]">
            <div v-for="(photo, index) in photos" :key="index" class="masonry-item overflow-hidden rounded-[5px]">
                <img :src="photo" class="w-full object-cover">
            </div>
        </div>

        <div class="mt-[20px] flex items-center flex-row gap-1">
            <p class="text-[15px] font-medium md:text-[20px]">See all my</p>
            <router-link to="/mobile-menu" class="flex flex-row items-center">
                <p class="text-[15px] font-medium text-[#F9C74F] md:text-[20px]"> PHOTOS</p>
                <MoveUpRight class="w-[15px] h-[15px] font-medium ml-[2px] md:w-[20px] md:h-[20px]" />
            </router-link>
        </div>

    </div>
</template>

<style>
.masonry {
    column-count: 1;
    column-gap: 16px;
}

@media (min-width: 768px) {
    .masonry {
        column-count: 2;
    }

    .recent-photos-title{
        font-size: 20px;;
    } 
}

@media (min-width: 1024px) {
    .masonry {
        column-count: 4;
    }
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: 16px;
}
</style>