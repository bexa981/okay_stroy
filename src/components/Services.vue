<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
    AOS.init();
})
</script>
<template>
    <div class="service-main">
        <div class="bg-service">
     <div class="bg-image">

     </div>
            <h2>Our services</h2>
        </div>
        <div class="cards">
            <div class="card" data-aos="flip-down">
          <img src="/images/service1.webp" alt="" >
          <p class="title">title</p>
          <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, laborum. Quae corporis deleniti dolor quasi dolorem nemo libero ipsa odio.</p>
          <button>More...</button>
            </div>
            <div class="card" data-aos="flip-down">
           <img src="/images/service1.webp" alt="" >
           <p class="title">title</p>
           <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, laborum. Quae corporis deleniti dolor quasi dolorem nemo libero ipsa odio.</p>
           <button>More...</button>
            </div>
            <div class="card" data-aos="flip-down">
           <img src="/images/service1.webp" alt="" >
           <p class="title">title</p>
           <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, laborum. Quae corporis deleniti dolor quasi dolorem nemo libero ipsa odio.</p>
           <button>More...</button>
            </div>
            <div class="card" data-aos="flip-down">
           <img src="/images/service1.webp" alt="">
           <p class="title">title</p>
           <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, laborum. Quae corporis deleniti dolor quasi dolorem nemo libero ipsa odio.</p>
           <button>More...</button>
            </div>

        </div>

    </div>
</template>

<style scoped>
.bg-image{
    width: 100%;
    height: 40vh;
    position: absolute;
    z-index: 2;
    background-color:var(--greenColor);
    opacity: .6;
}
.bg-service{
    background-attachment: fixed;
    position: relative;
    width: 100%;
    height: 40vh;
    background-image: url('/images/home-repairs.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.service-main{
    background-color: #f5f5f6;
    padding-bottom: 20px;
}
.service-main h2{
    z-index: 3;
    left: 38%;
    position: absolute;
    text-align: center;
    padding: 10px;
    margin: 20px;
    color: white;
    font-size: 40px;
    top: 30%;
}
.cards{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 50px 0;
    flex-wrap: wrap;
}
.card{
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px rgb(173, 173, 173);
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    
}
.card .title{
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    font-family: 'Abril Fatface';
}
.card .info{
    line-height: 1.7;
}
.card button{
    padding: 7px; 
    width: 200px;
    text-align: center;
    background-color:var(--greenColor);
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
    transition: .3s;
    margin-bottom: 10px;
}
.card button:hover{
    color: rgb(211, 211, 211);
}
 .card img{
  width: 100%;
 }
 @media only screen and (max-width: 600px) {
    .service-main h2{
        text-align: center;
        left: 10%;
        font-size: 35px;
    }
 }
</style>