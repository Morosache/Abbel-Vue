<script setup>
defineProps({
    firstLink:String,
    secondLink:String,
    thirdLink:String,
    fourthLink:String,

})
</script>

<template>
    <ol class=" flex flex-row gap-6 mr-[40px]">
        <router-link to="/">
            <li class="text-[#f5f5f5]">{{ firstLink }}</li>
        </router-link>
        <router-link to="/">
            <li class="text-[#f5f5f5]">{{ secondLink }}</li>
        </router-link>
        <router-link to="/">
            <li class="text-[#f5f5f5]">{{ thirdLink }}</li>
        </router-link>
        <router-link to="/">
            <li class="text-[#f5f5f5]">{{ fourthLink }}</li>
        </router-link>

    </ol>

</template>

<style scoped >
li:hover {
        color: #F9C74F;
        transition: all 0.2s ease;
    }

@media (min-width:1024px) {
    li {
        font-size: 17px;
    }
}
    
</style>