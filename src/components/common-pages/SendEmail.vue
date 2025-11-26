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
    <form ref='form' @submit.prevent="sendEmail" class=" w-full flex justify-center items-center flex-col">
        <div class="w-full flex flex-col gap-1  my-[15px] md:w-[600px]">
            <div class="flex flex-col md:flex-row gap-1">
                <input type="text" placeholder="First Name" name="user_first_name" required
                    class="footer-input border-1 w-full h-[25px] border-[#222222] rounded-[5px] placeholder-gray-500">
                <input type="text" placeholder="Last Name" name="user_last_name"
                    class=" footer-input border-1 w-full h-[25px] border-[#222222] rounded-[5px] placeholder-gray-500">
            </div>
            <input type="email" placeholder="Your email" name="user_email" required
                class=" footer-input border-1 w-full h-[25px] border-[#222222] rounded-[5px] placeholder-gray-500">
            <input type="text" placeholder="Subject" name="subject"
                class=" footer-input border-1 w-full h-[25px] border-[#222222] rounded-[5px] placeholder-gray-500">
            <textarea placeholder="Message" id="message" name="message" required
                class="resize-none border-1 border-[#222222] pl-[3px] text-[13px] rounded-[5px] w-full h-[100px]"></textarea>
            <div class="flex w-full mt-[3px]">
                <input type="submit" value="Send Email"
                    class="bg-[#F9C74F] rounded-[5px] px-[20px] font-medium text-[13px] md:text-[15px] lg:text-[17px]">
            </div>
        </div>

    </form>
</template>

<style scoped>
.footer-input {
    color: #222222;
    font-size: 13px;
    padding-left: 5px;
}

input::placeholder {
    font-size: 13px;
    padding-left: 5px;
}

@media(min-width:768px) {
    .footer-input {
        height: 30px;
        font-size: 15px;
    }

    input::placeholder, textarea{
        font-size: 15px;
    }
}

@media(min-width:1024px) {
    .footer-input {
        height: 35px;
        font-size:17px;
    }

    input::placeholder, textarea {
        font-size: 17px
    }

}
</style>