<script setup>
import { User } from 'lucide-vue-next'
import { ChevronLeft} from 'lucide-vue-next'
import { ChevronRight} from 'lucide-vue-next'
import { Star } from 'lucide-vue-next'

defineProps({
    reviewName: String,
    reviewTitle: String,
    reviewDescription: String
})



</script>

<template>
    <div class="flex flex-row items-center jusitfy-center mt-[30px]">
        <div class=" review-card mx-[5px] w-[280px] lg:w-[320px] h-[140px] lg:h-[180px] bg-white rounded-[10px] border-1 border-[#F9C74F]">
            <div class="flex items-center mt-[8px] justify-center flex-row">
                <Star class="w-[12px] lg:w-[16px]" />
                <Star class="w-[12px] lg:w-[16px]" />
                <Star class="w-[12px] lg:w-[16px]" />
                <Star class="w-[12px] lg:w-[16px]" />
                <Star class="w-[12px] lg:w-[16px]" />
            </div>
            <div class="flex justify-center items-center lg:mt-[16px]">
                <User class="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px]"/>
                <p class="font-medium text-[14px] lg:text-[18px]">{{ reviewName }}</p>
            </div>
            <div class="text-center">
                <p class="text-[13px] lg:text-[16px]">{{ reviewTitle }}</p>
            </div>

            <div class="text-center mb-[5px] mx-[2px]">
                <p class="text-[11px] lg:text-[14px] text-[#666666]">"{{ reviewDescription }}"</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.review-card {
    box-shadow: 3px 3px 15px rgb(162, 162, 162);
}
</style>