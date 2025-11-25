<script setup>
defineProps({
    links: Array,
});

  const scrollToContact = () => { 
    const el = document.getElementById("contact");
    const rect = el.getBoundingClientRect();
    const y = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2);

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }

</script>

<template>
    <ol class=" flex flex-row  items-center gap-6 mr-[40px]">
        <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.to">{{ link.label }}</router-link>
        </li>
        <button type="button" @click="scrollToContact"
            class="text-[#222222]  hover:bg-[#E0B247] cursor-pointer px-[15px] py-[3px] rounded-[12px] bg-[#F9C74F]">
            Contact</button>
    </ol>

</template>

<style scoped>

li{
    color:#f2f2f2
}
li:hover {
    color: #F9C74F;
    transition: all 0.2s ease;
}

button:hover {
    transition: all 0.2s ease;
}

@media (min-width:1024px) {
    li {
        font-size: 17px;
    }
}
</style>