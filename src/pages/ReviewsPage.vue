<script setup>
import MainFooter from '@/components/common-pages/MainFooter.vue';
import MenuBar from '@/components/common-pages/MenuBar.vue';
import MainPageReviews from '@/components/main-page/MainPageReviews.vue';
import ReviewForm from '@/components/reviews-page/ReviewForm.vue';
</script>

<template>
    <MenuBar :links="[
        { to: '/', label: 'Home' },
        { to: '/about-page', label: 'About' },
        { to: '/portfolio-page', label: 'Portfolio' },
    ]" />
    <MainPageReviews class="pt-[100px]" />
    <ReviewForm />
    <MainFooter :routes="[
        { to: '/', label: 'Home' },
        { to: '/about-page', label: 'About' },
        { to: '/portfolio-page', label: 'Portfolio' },
    ]" />

</template>