<script setup>
import Telegram2 from './Icons/Telegram2.vue';
import Facebook2 from './Icons/Facebook2.vue';
import Instagram2 from './Icons/Instagram2.vue';
import Youtube2 from './Icons/Youtube2.vue';
import Phone from './Icons/PhoneIcon.vue';
import Location from './Icons/Location.vue';
import Calendar from './Icons/Calendar.vue';
import Mail from './Icons/Mail.vue'
</script>

<template>
    <div class="contact2">
        <div class="social-main">
            <p data-aos="fade-up" class="title">Social</p>
            <div data-aos="fade-up" class="social">
                <a href=""><Telegram2/></a>
                <a href=""><Facebook2/></a>
                <a href=""><Instagram2/></a>
                <a href=""><Youtube2/></a>
            </div>
        </div>
        <div class="phone">
            <p data-aos="fade-up" class="title">Phone</p>
            <p data-aos="fade-up" class="info"> <Phone/> +998-90-075-7151; +998-77-777-7777</p>

        </div>
        <div class="address">
            <p data-aos="fade-up" class="title">Address</p>
            <p data-aos="fade-up" class="info"><Location/> 2130 Fulton Street, San Diego,
                <br>
                CA 94117-1080 USA
            </p>
        </div>
        <div  class="hours">
            <p data-aos="fade-up" class="title">Open Hours</p>
            <p data-aos="fade-up" class="info"><Calendar/> Mon-Fri: 9:00am-6:00pm
                <br>
                Sat-Sun: 10:00am-5:00pm</p>
        </div>
        <div class="email">
            <p data-aos="fade-up" class="title">E-mail</p>
            <p data-aos="fade-up" class="info"> <Mail/> okaystroy@gmail.uz</p>

        </div>
    </div>
</template>

<style scoped>
.contact2{
    display: flex;
    flex-direction: column;
    gap: 70px;
}
.title{
    font-size: 22px;
    font-weight: 600;
}
.info{
    margin-top: 30px;
    display: flex;
    gap: 10px;
}
.social{
    margin-top: 30px;
    display: flex;
    gap: 10px;
}
</style>