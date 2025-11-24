<script setup>
import SendEmail from './SendEmail.vue';
import { Mail } from 'lucide-vue-next'
</script>

<template>
    <div class="p-[30px]">
        <div class="flex border-l-2 gap-1 mb-[10px]">
            <Mail class="ml-[4px] w-[19px] h-[20px]"/>
            <p class="text-[15px] font-medium">Contact</p>
        </div>
        <SendEmail />
    </div>

</template>