<script setup>
import Header from '@/components/main-page/Header.vue';
import WhoAmI from '@/components/main-page/WhoAmI.vue';
import MostRecentPhotos from '@/components/main-page/MostRecentPhotos.vue';
import MainPageReviews from '@/components/main-page/MainPageReviews.vue';
import MainFooter from '@/components/common-pages/MainFooter.vue';
import Contact from '@/components/main-page/Contact.vue';
</script>

<template>
<Header />
<WhoAmI />
<MostRecentPhotos />
<MainPageReviews />
<Contact id="contact" />
<MainFooter :routes="[
        { to: '/about-page', label: 'About' },
        { to: '/portfolio-page', label: 'Portfolio' },
        { to: '/reviews-page', label: 'Reviews' },
    ]" />

</template>