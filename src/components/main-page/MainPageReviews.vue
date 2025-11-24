<script setup>
import { ref, computed, onMounted } from 'vue'
import { UserStar } from 'lucide-vue-next'
import ReviewCard from '../common-pages/ReviewCard.vue';
import { ChevronLeft } from 'lucide-vue-next'
import { ChevronRight } from 'lucide-vue-next'

const reviews = [
    { id: 1, reviewName: 'Elisei Morosan', reviewTitle: 'Foarte bun', reviewDescription: 'Cel mai bun fotograf de pe zona Sucevei si de pe zona Bruxelles! Recomand cu incredere!' },
    { id: 2, reviewName: 'Larisa Morosan', reviewTitle: 'Super smecher', reviewDescription: 'In molestie ullamcorper tortor non rutrum. Suspendisse blandit leo ac orci lobortis, non dapibus eros pellentesque.' },
    { id: 3, reviewName: 'Miriam Gurita', reviewTitle: 'Cel mai tare', reviewDescription: 'ulla in diam sed quam dapibus ornare. Integer dui eros, fringilla sed dolor nec, tempus suscipit lacus.' },
    { id: 4, reviewName: 'Isaac Gurita', reviewTitle: 'Cel mai bun', reviewDescription: 'urabitur hendrerit mauris nibh, in malesuada nibh tincidunt eu. Morbi a rhoncus ex.' },
    { id: 5, reviewName: 'Cornelia Morosan', reviewTitle: 'Cel mai bun', reviewDescription: 'Vivamus congue cursus est, vitae laoreet elit ornare vitae. Phasellus ac auctor nisi. Duis sodales in nisi in congue. Aliquam eu elit id elit cursus sollicitudin. ' },
    { id: 6, reviewName: 'Costica Morosan', reviewTitle: 'Cel mai bun', reviewDescription: 'Cras nec justo bibendum, efficitur lacus ac, faucibus ligula. Sed varius sed sapien sed laoreet. Nulla et massa et risus pulvinar sodales.' },
    { id: 7, reviewName: 'Abbel Gurita', reviewTitle: 'Cel mai bun', reviewDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum egestas augue eu molestie. ' },

]

const currentIndex = ref(0);
const width = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener("resize", () => {
        width.value = window.innerWidth;
    })
})

const cardsToShow = computed(() => {
    if(width.value >= 1024) return 3
    if(width.value >= 768) return 2
    return 1
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
    <div class= "bg-[#f5f5f5] px-[30px] py-[50px] md:px-[50px] lg:px-[70px]">
        <div class="flex flex-row items-center gap-1 border-l-2">
            <UserStar class="ml-[4px] w-[19px] h-[20px] md:h-[29px] md:w-[29px]" />
            <p class="text-[15px] md:text-[20px]">Client</p>
            <p class="text-[15px] text-[#F9C74F] md:text-[20px]">REVIEWS</p>
        </div>
        <div class="flex flex-row justify-center items-center">
            <button @click=prevReview>
                <ChevronLeft class="change-button md:w-[30px] md:h-[30px] hover:text-[#F9C74F]" />
            </button>
            <div class="flex justify-center items-center pb-[20px] gap-2">
                <ReviewCard v-for="review in visibleReviews" :key="review.id" :reviewName="review.reviewName"
                    :reviewTitle="review.reviewTitle" :reviewDescription="review.reviewDescription" />
            </div>
            <button @click=nextReview>
                <ChevronRight class="change-button md:w-[30px] md:h-[30px]" />
            </button>

        </div>
    </div>

</template>

<style scoped>
.change-button:hover {
    color: #F9C74F;
    transition: all 0.2s ease;

}
</style>