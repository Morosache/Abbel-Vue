<script setup>
import { X } from 'lucide-vue-next'
</script>

<template>
    <!--Menu POP-->
    <div class="fixed inset-0 bg-[#f5f5f5] flex flex-col px-[30px] py-[20px]">
        <div>
        <router-link to="/"> <X  class="justify-self-end md:w-[40px] md:h-[40px]"/></router-link>
        </div>
        <div class="flex flex-col mx-[30px]">
            <ol>
                <router-link to="/"><li>Home</li></router-link>
                <router-link to="/about-page"><li>About</li></router-link>
                <router-link to="/"><li>Portfolio</li></router-link>
                <router-link to="/reviews-page"><li>Reviews</li></router-link>
                <a href="contact"><li>Contact</li></a>
            </ol>
        </div>
    </div>



</template>

<style scoped>
li {
    margin-top: 20px;
    border-bottom: 1px solid black;
    font-size: 20px;
    font-weight: 400;
}

@media (min-width: 768px) {
    li {
        font-size:28px;
    }

}
</style>
