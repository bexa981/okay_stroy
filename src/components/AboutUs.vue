<script setup>
import { ref } from 'vue';
import { onMounted } from "vue";
import AOS from "aos";
import video1 from '/video/video1.mp4'

onMounted(() => {
    AOS.init();
})

const inputValue1 = ref('');
const inputValue2 = ref('');
const inputValue3 = ref('');
const inputValue4 = ref('');

const placeholders={
    input1:`Имя`,
    input2:'Фамилия',
    input3:'Tелефон',
    input4:'Электронная почта',

}
    
    const clearPlaceholder = (event) => {
      event.target.removeAttribute('placeholder');
    };

    const restorePlaceholder = (event) => {
      event.target.setAttribute('placeholder', placeholders[event.target.id]);
    };
    inputValue1,
    inputValue2,
    inputValue3,
      clearPlaceholder,
      restorePlaceholder
</script>

<template>
    <div class="about-us">
        <div class="about">
            <div class="top" data-aos="zoom-out-up">
                <p class="num">4</p>
                <p><span class="year">{{ $t('years') }}</span> <br> <span class="experience">{{ $t('experience') }}</span></p>
            </div>
            <div data-aos="zoom-out-up" class="info">
                <p>{{$t('aboutUs') }}</p>
            </div>

            <div class="advantages">
     <ul>
        <li data-aos="fade-right">{{ $t('service1') }}</li>
        <li data-aos="fade-right">{{ $t('service2') }}</li>
        <li data-aos="fade-right">{{ $t('service3') }}</li>
        <li data-aos="fade-right">{{ $t('service4') }}</li>
        
     </ul>
            </div>
        </div>

        <div class="form" data-aos="fade-up" data-aos-duration="3000">
      <p>{{ $t('free') }} <br> <span>{{ $t('maslahat') }}</span></p>

      <form action="">
        <input id="input1" type="text" v-model="inputValue1" @focus="clearPlaceholder" @blur="restorePlaceholder"  placeholder="Имя">
        <input id="input2" type="text" v-model="inputValue2" @focus="clearPlaceholder" @blur="restorePlaceholder"  placeholder="Фамилия">
        <input id="input3" type="text" v-model="inputValue3" @focus="clearPlaceholder" @blur="restorePlaceholder"  placeholder="Tелефон">
        <input id="input4" type="text" v-model="inputValue4" @focus="clearPlaceholder" @blur="restorePlaceholder"  placeholder="Электронная почта">
        <button>{{ $t('zayafka') }}</button>
      </form>
        </div>

        <div class="video">
            <div  class="player-container">
                <vue3-video-player class="video1" src="/video/video1.mp4"></vue3-video-player>
            </div>
        </div>

        <!-- <div class="image" data-aos="fade-left">
   <div class="guarantee">
    <img src="./Icons/shield.png" alt="">
  <p>{{ $t('guarantee1') }} <br> {{ $t('guarantee2') }} </p>
   </div>
        </div> -->
    </div>
</template>

<style scoped>
.about-us {
    background-color: #f5f5f6;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 5%;
    padding: 100px 0;
}
.about{
    display: flex;
    flex-direction: column;
    width: 400px;
}
.video1{
    width: 200px;
    height: 240px;
}
.player-container {
    width: 440px;
    height: 500px;
   
}
.top{
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px;

}
.top{
    line-height: 0.5;
}
.num{
    font-size: 70px;
    color: var(--greenColor);
    font-family: 'Abril Fatface', serif;
    font-weight: 700;
}
.year{
    font-size: 40px;
    font-weight: 500;
    color: rgb(204, 203, 203);
}
.experience{
    font-size: 30px;
    font-family: 'Abril Fatface', serif;
    color: rgb(66, 66, 66);
}
.info p{
    width: 350px;
    line-height: 1.6;
    letter-spacing: 0px;
    text-align: justify;
    font-size: 20px;
    margin: 20px 0px;
    color: rgb(132, 132, 132);
}
.advantages ul{
    list-style-type: none;
}
ul li{
    font-size: 22px;
    font-family:'Abril Fatface' ;
    font-weight: 400;
    color:rgb(66, 66, 66) ;
    letter-spacing: 1.5px;
    position: relative;
    margin-top: 10px;
}
ul li::before{
    content: '';
    position: absolute;
    left: -40px;
    top: 0;
    width: 30px;
    height: 30px;
    background-image: url('../components/Icons/select.png');
    background-position: center;
    background-size: cover;
    background-color: white;
    border-radius: 50%;
}
.form{
    width: 350px;
    background-color: white;
    box-shadow: 0px 0px 10px  gray;
    text-align: center;
    padding: 30px 0;
}
.form p{
 font-size: 24px;
 font-family:'Abril Fatface' ;
 color: rgb(66, 66, 66);
}
.form p span{
    font-size: 40px;
 font-family:'Abril Fatface' ;
}
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 45px;
}
form input{
    padding: 15px 10px;
    font-size: 18px;
    font-family:cursive;
    border: 1px solid rgb(179, 179, 179);
    font-weight: 100;
}
input:focus {
  border: 2px solid var(--greenColor); /* Change the border style when in focus */
  outline: none; /* Remove the default outline (blue highlight) on focus, if desired */
}
form button{
    font-size: 18px;
    padding: 15px 10px;
    width: 290px;
    cursor: pointer;
    background-color: var(--greenColor);
    color: white;
    border: none;
    font-weight: 500;
    transition: .3s;
}
form button:hover{
    color: rgb(194, 194, 194);
}
input:focus::placeholder {
  content: ''; /* Set the content to an empty string */
}
.image{
    width: 400px;
    display: flex;
    align-items: end;
    justify-content: center;
    background-color: gray;
    height: 400px;
    border-radius: 15px;
    background-image: url('/images/guarantee2.png');
    background-size: cover;
    background-position: center;
}
.guarantee{
    border-radius: 30px 10px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--blueColor);
    padding: 20px;
    margin-bottom: 20px;
}
.guarantee img{
    width: 50px;
}
.guarantee p{
    font-size: 22px;
    color: white;
    font-weight: 500;
}
@media only screen and (max-width: 420px) {
  .about{
    width: 100%;
    margin: 0px 5px;
    align-items: center;
  }
  .form{
    width: 100%;
    margin: 5px 5px;
  }
  .image{
    width: 100%;
    margin: 0 5px;
  }
}
</style>