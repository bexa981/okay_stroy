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
            <p data-aos="fade-up" class="title">{{$t('social')}}</p>
            <div data-aos="fade-up" class="social">
                <a target="_blank" href="https://t.me/okaystroy"><Telegram2/></a>
                <a target="_blank" href="https://www.facebook.com/okaystroy"><Facebook2/></a>
                <a target="_blank" href="https://www.instagram.com/remont_okey/"><Instagram2/></a>
                <a target="_blank" href="#"><Youtube2/></a>
            </div>
        </div>
        <div class="phone">
            <p data-aos="fade-up" class="title">{{$t('phone')}}</p>
            <p data-aos="fade-up" class="info"> <Phone/> +998(88) 133-96-96</p>

        </div>
        <div class="address">
            <p data-aos="fade-up" class="title">{{$t('address')}}</p>
            <p data-aos="fade-up" class="info"><Location/>  г.Ташкент, ул.Бунёдкор, д.Е-12
            </p>
        </div>
        <div  class="hours">
            <p data-aos="fade-up" class="title">{{$t('openHours')}}</p>
            <p data-aos="fade-up" class="info"><Calendar/> {{$t('hours')}}
                <br>
                {{$t('hours2')}}</p>
        </div>
        <div class="email">
            <p class="title">{{$t('email')}}</p>
            <p  class="info"> <Mail/> okaystroy@gmail.uz</p>

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