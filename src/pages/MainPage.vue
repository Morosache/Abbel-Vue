<script setup>
import Header from '@/components/main-page/Header.vue';
import WhoAmI from '@/components/main-page/WhoAmI.vue';
import MostRecentPhotos from '@/components/main-page/MostRecentPhotos.vue';
import MainPageReviews from '@/components/main-page/MainPageReviews.vue';
import MainFooter from '@/components/main-page/MainFooter.vue';
</script>

<template>
<Header />
<WhoAmI />
<MostRecentPhotos />
<MainPageReviews />
<MainFooter firstLink="About" secondLink="Most Recent" thirdLink="Portofolio" fourthLink="Reviews"/>

</template>