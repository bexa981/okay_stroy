<script setup>
import { ref } from "vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})

 const items = ref([{
    id:1,
    img:'/images/clients/client1.jpg',
    name:'Christian Dior',
    job:'Web Designer',
    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum iure sequi, a aspernatur obcaecati quia vero amet vitae?'
 },
 {
    id:2,
    img:'/images/clients/client1.jpg',
    name:'Lionel Messi',
    job:'Economic',
    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum iure sequi, a aspernatur obcaecati quia vero amet vitae?'
 },
 {
    id:3,
    img:'/images/clients/client1.jpg',
    name:'Cristiano Ronaldo',
    job:'Journalist',
    info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum iure sequi, a aspernatur obcaecati quia vero amet vitae?'
 }
 
])
</script>

<template>
    <div class="clients">
        <h2 data-aos="fade-down">{{ $t('clients') }}</h2>
        <div class="cards">
        <div data-aos="fade-up-right" class="card" v-for="item in items" :key="item.id">
        <div class="top-card">
            <img :src="item.img" alt="client">
            <div class="names">
                <p class="name">{{ item.name }}</p>
                <p class="job">{{ item.job }}</p>

            </div>

        </div>
        <div class="mid">
            <p class="info">{{ item.info }}</p>

        </div>
    </div>
    </div>
    </div>
    
    
</template>

<style scoped>

.clients{
    background-attachment: fixed;
    padding: 100px 0;
    margin-bottom: 100px;
    background-image: url('https://www.teradici.com/images/default-source/background-images/desktop-access-background.jpg?sfvrsn=8cc22298_2');
    background-size: cover;
    background-position: center;
}
.clients h2{
    text-align: center;
    font-size: 40px;
    color: white;
}
 .cards{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
 }
 .card{
    width: 370px;
    color: white;
 }
 .card img{
    width: 50px;
    border-radius: 50%;
 }
 .card .name{
    font-weight: 600;
    font-size: 18px;
 }
 .card .job{
    font-size: 15px;
    color: rgb(215, 214, 214);
 }
 .card .info{
    font-family: 'Edu TAS Beginner', cursive;
    font-size: 19px;
 }
 .top-card{
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(183, 181, 181);
    margin-bottom: 10px;
 }
 @media only screen and (max-width: 600px) {
  .card{
    padding: 5px;
  }
 }
 
</style>