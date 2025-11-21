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
                <router-link to="/"><li>About</li></router-link>
                <router-link to="/"><li>Most recent</li></router-link>
                <router-link to="/"><li>Reviews</li></router-link>
                <router-link to="/"><li>Contacts</li></router-link>
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
