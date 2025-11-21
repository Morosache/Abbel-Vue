<script setup>
import { User } from 'lucide-vue-next'
import { MoveUpRight } from 'lucide-vue-next'
</script>

<template>
    <div class="who-am-i-section px-[40px] pt-[100px] pb-[30px] bg-[#F5F5F5] md:pb-[50px] lg:flex lg:justify-center lg:items-center lg:gap-10 lg:px-[80px]">
        <div class="flex justify-center ">
            <img src="/images/pozaabbel.webp" loading="lazy" class="rounded-[5px] md:w-[500px] md:h-[650px] lg:w-[450px] lg:h-[600px]"></img>
        </div>

        <div class="lg:w-1/2">
            <div class="flex flex-row items-center mt-[30px] border-l-2 md:mt-[50px]">
                <User class="w-[22px] h-[22px] ml-[3px] md:w-[32px] md:h-[32px]" />
                <p class="text-[22px] ml-[3px] md:text-[26px]">Who Am I?</p>
            </div>

            <div class="mt-[20px]" id="who-section-text">
                <p class=" who-section-text text-[15px] text-[#666666]">Hello! My name is Guriță Eduard Abbel. I work in
                    construction, but
                    my
                    passion is photography. I especially enjoy photographing people in nature.</p>
                <p class=" who-section-text text-[15px] mt-[10px] text-[#666666]">I also take photos at weddings,
                    baptisms, and other
                    special
                    events in people's lives.</p>
                <p class="who-section-text text-[15px] mt-[10px] text-[#666666]">I am currently based in Brussels, but I
                    also travel to
                    Romania during holidays.</p>
            </div>

            <div class="mt-[20px] flex items-center flex-row gap-1 md:gap-1.5">
                <p class="text-[15px] font-medium md:text-[20px]">More</p>
                <router-link to="/mobile-menu" class="flex flex-row items-center">
                    <p class="text-[15px] font-medium text-[#F9C74F] md:text-[20px]"> ABOUT ME</p>
                    <MoveUpRight class="w-[15px] h-[15px] font-medium ml-[2px] md:w-[20px] md:h-[20px]" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 768px) {

    .who-section-text {
        font-size: 18px;
    }
}
</style>