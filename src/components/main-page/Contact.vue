<script setup>
import SendEmail from '../common-pages/SendEmail.vue';
import { Mail } from 'lucide-vue-next'
</script>

<template>
    <div class="p-[30px] md:px-[50px] " id="contact">
        <div class="flex border-l-2 gap-1 mb-[10px] flex items-center">
            <Mail class="ml-[4px] w-[19px] h-[20px] md:w-[29px] md:h-[30px]"/>
            <p class="text-[15px] md:text-[20px]">Contact</p>
        </div>
        <SendEmail />
    </div>

</template>