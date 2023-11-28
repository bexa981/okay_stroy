<script setup>
import { ref } from "vue";

import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
const downloadFile = () => {
      // Replace the placeholder URL with the actual URL of the file you want to download
      const fileUrl = '/images/file/politica.docx';

      // Create a link element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '_blank';
      link.download = 'Политика конфиденциальности.docx';

      // Trigger a click event to start the download
      link.click();
    };

    downloadFile

 const items = ref([{
    id:1,
    img:'/images/clients/ozod.jpg',
    name:'Ozodbek Nazarbekov',
    job:'Madaniyat Vaziri',
    info:'Juda ham ajoyib sifatli ishlar qilishgan, menga juda ham maqul keldi, barcha talablarga javob beradi. Eng asosiysi ishonchli va sizlarga ham tavsiya qilib qolaman.'
 },
 {
    id:2,
    img:'/images/clients/sardor.jpg',
    name:"Sardor Rashidov",
    job:'Proffesional Fudbolchi',
    info:'Barcha xizmataridan foydalandim,ularning barchasi juda sifatli qilindi va muximi kafolat bilan albatta. Men sizlarga Ok-stroy ni tavsiya qilib qolaman.'
 },
 {
    id:3,
    img:'/images/clients/xamdam.jpg',
    name:'Xamdam Sobirov',
    job:'Honanda',
    info:'Assalomu alekum barchaga Men okay stroyga juda katta minadorchilik bildiraman ular sabab ajoib va shinam xonadonga ega bo`ldim. Barcha ishlarini juda sifatli va maxorat bilan qilishadi.'
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
    <button @click="downloadFile" class="dowloadFile">{{ $t('politic') }}</button>
    </div>
    
    
</template>

<style scoped>

.clients{
    background-attachment: fixed;
    display: block;
    flex-direction: column;
    text-align: center;
    padding: 100px 0;
    margin-bottom: 100px;
    background-image: url('https://www.teradici.com/images/default-source/background-images/desktop-access-background.jpg?sfvrsn=8cc22298_2');
    background-size: cover;
    background-position: center;
}
.dowloadFile{
   margin-top: 30px;
   padding: 10px;
   font-size: 18px;
   font-weight: 500;
   cursor: pointer;
   border: none;
   background-color: white;
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