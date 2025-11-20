<script setup>
import { Mail } from 'lucide-vue-next'
</script>

<template>
    <!-- See More -->
    <div class="bg-[#222222] pt-[60px] pb-[15px] flex flex-col justify-center items-center">
        <div>
            <div>
                <div class="flex jusitfy-center items-center mb-[6px] border-l-3 text-[#f1f1f1]">
                    <h1 class="text-[32px] text-[#f1f1f1] ml-[3px] ">See More</h1>
                </div>
                <div class="flex justify-center flex-col items-left">
                    <router-link to="/" class="text-[20px] text-[#666666]">Portofolio</router-link>
                    <router-link to="/" class="text-[20px] text-[#666666]">Most Recent</router-link>
                    <router-link to="/" class="text-[20px] text-[#666666]">About</router-link>
                    <router-link to="/" class="text-[20px] text-[#666666]">Reviews</router-link>
                </div>
            </div>
            <!-- Social Media -->
            <div class=" mt-[50px]">
                <div class="flex jusitfy-center items-center mb-[6px] border-l-3 text-[#f1f1f1]">
                    <h1 class="text-[32px] text-[#f1f1f1] ml-[3px] ">Social Media</h1>
                </div>
                <div class="flex justify-center flex-col items-left">
                    <div class="flex items-center flex-row gap-2">
                        <i class="bi bi-facebook text-[#1877F2]"></i>
                        <a href="https://www.facebook.com/guritaabbel.photographer"
                            class="text-[20px] text-[#666666]">Gurita Abbel Foto</a>
                    </div>
                    <div class="flex items-center flex-row gap-2">
                        <i class="bi bi-instagram text-[#C13584]"></i>
                        <a href="https://www.prod.instagram.com/guritaabbel.photographer/"
                            class="text-[20px] text-[#666666]">guritaabbel.photographer</a>
                    </div>
                    <div class="flex items-center flex-row gap-2">
                        <i class="bi bi-whatsapp text-[#25D366]"></i>
                        <a href="+32467630097" class="text-[20px] text-[#666666]">+32 467 63 00 97</a>
                    </div>
                </div>
            </div>

            <!-- Contact Me Form -->
            <div class="mt-[50px]">
                <div class="flex jusitfy-center items-center mb-[6px] border-l-3 text-[#f1f1f1]">
                    <h1 class="text-[32px] text-[#f1f1f1] ml-[3px] ">Send me an email</h1>
                </div>
                <div class="mt-[20px]">
                    <form @submit.prevent>
                        <div class="w-full flex flex-col gap-1">
                            <input type="text" placeholder="First Name"
                                class="border-1 w-full border-[#f1f1f1] placeholder-gray-400">
                            <input type="text" placeholder="Last Name"
                                class="border-1 w-full border-[#f1f1f1] placeholder-gray-400">
                            <input type="email" placeholder="Your email"
                                class="border-1 w-full border-[#f1f1f1] placeholder-gray-400">
                            <input type="text" placeholder="Subject"
                                class="border-1 w-full border-[#f1f1f1] placeholder-gray-400">
                            <textarea name="Message" id="message"
                                class="border-1 border-[#f1f1f1] w-full h-[100px] text-gray-400">Message</textarea>
                        </div>
                        <div class="flex w-full mt-[3px]">
                            <input type="submit" value="Send Email"
                                class="bg-[#F9C74F] rounded-[5px] px-[20px] font-medium text-[13px]">
                        </div>
                    </form>
                </div>
            </div>

            <!-- Map -->

            <div class=" mt-[60px]">
                <iframe
                    class="w-full h-full rounded-[5px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.6518523613!2d4.293017074878567!3d50.855093691057704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelles%2C%20Belgia!5e0!3m2!1sro!2sro!4v1763141612826!5m2!1sro!2sro"    
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div class=" flex flex-row gap-1 text-[8px] text-[#f5f5f5] mt-[60px] justify-end">
                <i class="bi bi-c-circle"></i>
                <p>Morosan Elisei, 2025</p>
            </div>
        </div>
    </div>
</template>
