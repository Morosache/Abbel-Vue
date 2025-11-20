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
        <div class=" review-card mx-[5px] w-[280px] h-[140px] bg-white rounded-[10px] border-1 border-[#F9C74F]">
            <div class="flex justify-center items-center mt-[8px]">
                <User class="w-[16px] h-[16px]" />
                <p class="font-medium text-[14px]">{{ reviewName }}</p>
            </div>
            <div class="flex items-center justify-center flex-row">
                <Star class="w-[12px]" />
                <Star class="w-[12px]" />
                <Star class="w-[12px]" />
                <Star class="w-[12px]" />
                <Star class="w-[12px]" />
            </div>
            <div class="text-center">
                <p class="text-[13px]">{{ reviewTitle }}</p>
            </div>

            <div class="text-center mb-[5px] mx-[2px]">
                <p class="text-[11px] text-[#666666]">"{{ reviewDescription }}"</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.review-card {
    box-shadow: 3px 3px 15px rgb(162, 162, 162);
}
</style>