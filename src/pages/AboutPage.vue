<script setup>
import AboutMe from '@/components/about-page/AboutMe.vue';
import MainFooter from '@/components/common-pages/MainFooter.vue';
import MenuBar from '@/components/common-pages/MenuBar.vue';
</script>

<template>
    <MenuBar :links="[
        { to: '/', label: 'Home' },
        { to: '/most-recent-page', label: 'Most Recent' },
        { to: '/portfolio-page', label: 'Portfolio' },
        { to: '/reviews-page', label: 'Reviews' },
    ]" />
    <AboutMe />
    <MainFooter :routes="[
        { to: '/', label: 'Home' },
        { to: '/most-recent-page', label: 'Most Recent' },
        { to: '/portfolio-page', label: 'Portfolio' },
        { to: '/reviews-page', label: 'Reviews' },
    ]" />
</template>