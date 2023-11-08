<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="call-us">
   <div class="call">
    <p data-aos="zoom-in-up" class="title">CALL US NOW</p>
   <p data-aos="zoom-in-up" class="info">+998(90)075 7151</p>
   </div>
   <div class="mail">
   <p data-aos="zoom-in-up" class="title">EMAIL ADDRESS</p>
   <p data-aos="zoom-in-up" class="info">okaystroy@gmail.com</p>
   </div>
   <div class="hours">
  <p data-aos="zoom-in-up" class="title">WORKING HOURS</p>
  <p data-aos="zoom-in-up" class="info">9:00am - 6:00pm</p>
   </div>
    </div>
</template>

<style scoped>
.call-us{
    display: flex;
    justify-content: center;
    gap: 70px;
    text-align: center;
    flex-wrap: wrap;
    padding: 40px 0;
}
.title{
    font-size: 25px;
    font-weight: 500;
    color: var(--greenColor);
}
.info{
    font-size: 35px;
    font-weight: 700;
    color: rgb(81, 81, 81);
}
.call{
    background-image: url('./Icons/phone-call.png');
    background-size: 140px;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: brightness(110%);
   
}
.mail{
    background-image: url('./Icons/mail.png');
    background-size: 170px;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    filter: brightness(110%);
}
.mail::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 35%;
    background-color: #D5D5D5;
    margin-top: 25%;
    
}
.mail::after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 35%;
    background-color: #D5D5D5;
    margin-top: 25%;
}
.hours{
    background-image: url('./Icons/hour.png');
    background-size: 140px;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    filter: brightness(110%);
}
@media only screen and (max-width: 600px) {
    .call-us{
        gap: 0;
        padding: 0;
    }
    .call{
        background-size: 100px;
        height: 200px;
    }
    .mail{
        background-size: 120px;
        height: 200px;
        
    }
    .mail::after{
        display: none;
    }
    .mail::before{
        display: none;
    }
    
    .hours{
        background-size: 120px;
        height: 200px;
    }
    .title{
    font-size: 18px;
    font-weight: 500;
    color: var(--greenColor);
}
.info{
    font-size: 25px;
    font-weight: 700;
    color: rgb(81, 81, 81);
}
}
</style>