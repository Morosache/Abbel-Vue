<script setup>
import StarRate from 'vue-star-rater';
import { ref } from 'vue'
import { SquareStar } from 'lucide-vue-next'

const starRating = ref(0);
</script>

<template>
    <div class=" w-full px-[30px] py-[50px] md:px-[50px] lg:px-[70px]">

        <div class="flex gap-1 border-l-2 pl-[3px] items-center">
            <SquareStar class=" w-[19px] h-[20px] md:w-[29px] md:h-[29px]" />
            <p class="md:text-[20px]">Leave me a</p>
            <p class="text-[#F9C74F] md:text-[20px]">REVIEW</p>
        </div>

        <div class="w-full mt-[20px] border-2 border-[#F9C74F] rounded-[5px] p-[5px] md:w-[600px] flex justify-center items-center">
            <form @submit.prevent class="flex flex-col gap-1 justify-center w-full items-center">
                <StarRate v-model="starRating" :max-stars="5" :colours="{
                    activeColour: '#F9C74F',
                    hoverColour: '#E0B247',
                    inactiveColour: '#f2f2f2'
                }" />
                <div class=" flex flex-col md:flex-row w-full gap-1">
                    <input type="text" placeholder="First Name" required
                        class="text-[14px] md:w-full border-1 border-gray-500 w-full rounded-[5px] pl-[5px] md:h-[30px] lg:h-[35px]">
                    <input type="text" placeholder="Last Name" required
                        class=" text-[14px] border-1 border-gray-500 w-full rounded-[5px] pl-[5px] md:h-[30px] md:text-[15px] lg:h-[35px]">
                </div>
                <input type="text" placeholder="Title" required
                    class=" text-[14px] border-1 border-gray-500 w-full rounded-[5px] pl-[5px] md:h-[30px] md:text-[15px] lg:h-[35px]">
                <textarea placeholder="Description"
                    class=" text-[14px] h-[70px] w-full resize-none border-gray-500 pl-[5px] border-1 rounded-[5px] md:text-[15px] "></textarea>
                <div>
                    <button type="submit"
                        class=" text-[14px] font-medium px-[10px] bg-[#F9C74F] rounded-[5px] hover:bg-[#E0B247] md:text-[15px] lg:text-[16px]">Save</button>
                </div>
            </form>
        </div>

    </div>

</template>

<style scoped>
button {
    transition: all 0.2s ease;
}
</style>