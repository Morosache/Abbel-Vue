<script>
import emailjs from '@emailjs/browser';

const serviceID = import.meta.env.VITE_EMAILJS_YOUR_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_YOUR_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default {
    methods: {
        sendEmail() {
            emailjs
                .sendForm(serviceID, templateID, this.$refs.form, {
                    publicKey: publicKey
                })
                .then(
                    () => {
                        console.log('succes');
                        this.$refs.form.reset();
                        alert("email sent");
                    },
                    (error) => {
                        console.log('failed... ', error.text)
                    },
                );

                
        },
    },
};
</script>

<template>
    <form ref='form' @submit.prevent="sendEmail">
        <div class="w-full flex flex-col gap-1">
            <input type="text" placeholder="First Name" name="user_first_name" required
                class="footer-input border-1 w-full border-[#f1f1f1] placeholder-gray-500">
            <input type="text" placeholder="Last Name" name="user_last_name"
                class=" footer-input border-1 w-full border-[#f1f1f1] placeholder-gray-500">
            <input type="email" placeholder="Your email" name="user_email" required
                class=" footer-input border-1 w-full border-[#f1f1f1] placeholder-gray-500">
            <input type="text" placeholder="Subject" name="subject"
                class=" footer-input border-1 w-full border-[#f1f1f1] placeholder-gray-500">
            <textarea placeholder="Message" id="message" name="message" required
                class="border-1 border-[#f1f1f1] w-full h-[100px] text-[#f5f5f5]"></textarea>
        </div>
        <div class="flex w-full mt-[3px]">
            <input type="submit" value="Send Email"
                class="bg-[#F9C74F] rounded-[5px] px-[20px] font-medium text-[13px] md:text-[15px]">
        </div>
    </form>
</template>

<style scoped>
    .footer-input {
        color: #f5f5f5;
    }
</style>