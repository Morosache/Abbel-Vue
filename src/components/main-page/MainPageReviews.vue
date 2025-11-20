<script setup>
import { ref, computed, onMounted } from 'vue'
import { UserStar } from 'lucide-vue-next'
import ReviewCard from './ReviewCard.vue';
import { ChevronLeft } from 'lucide-vue-next'
import { ChevronRight } from 'lucide-vue-next'

const reviews = [
    { id: 1, reviewName: 'Elisei Morosan', reviewTitle: 'Foarte bun', reviewDescription: 'Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!' },
    { id: 2, reviewName: 'Larisa Morosan', reviewTitle: 'Super smecher', reviewDescription: 'Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!' },
    { id: 3, reviewName: 'Miriam Gurita', reviewTitle: 'Cel mai tare', reviewDescription: 'Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!' },
    { id: 4, reviewName: 'Isaac Gurita', reviewTitle: 'Cel mai bun', reviewDescription: 'Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!' },
]

const currentIndex = ref(0);
const width = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener("resize", () => {
        width.value = window.innerWidth;
    })
})

const cardsToShow = computed(() => {
    return width.value >= 782 ? 2 : 1
})

const visibleReviews = computed(() => {
    return reviews.slice(currentIndex.value, currentIndex.value + cardsToShow.value);
})

function nextReview() {
    currentIndex.value += cardsToShow.value;
    if (currentIndex.value >= reviews.length) {
        currentIndex.value = 0;
    }
}

function prevReview() {
    currentIndex.value -= cardsToShow.value;
    if (currentIndex.value < 0) {
    currentIndex.value = Math.max(0, reviews.length - cardsToShow.value);
  }
}


</script>

<template>
    <div class=" pt-[50px] bg-[#f5f5f5] p-[30px]">
        <div class="flex flex-row items-center gap-1 border-l-2">
            <UserStar class="ml-[4px] w-[19px] h-[20px] md:h-[29px] md:w-[29px]" />
            <p class="text-[15px] md:text-[20px]">Client</p>
            <p class="text-[15px] text-[#F9C74F] md:text-[20px]">REVIEWS</p>
        </div>
        <div class="flex flex-row justify-center items-center">
            <button @click=prevReview>
                <ChevronLeft class="md:w-[30px] md:h-[30px]" />
            </button>
            <div class="flex justify-center items-center pb-[20px] gap-2">
                <ReviewCard v-for="review in visibleReviews" :key="review.id" :reviewName="review.reviewName"
                    :reviewTitle="review.reviewTitle" :reviewDescription="review.reviewDescription" />
            </div>
            <button @click=nextReview>
                <ChevronRight class="md:w-[30px] md:h-[30px]" />
            </button>

        </div>
    </div>

</template>
