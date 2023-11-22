<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()
const cards = ref([
    {
        id: 1,
        img_url: '/images/projects/kluch2.jpg',
        title: 'КАЧЕСТВЕННЫЙ РЕМОНТ РЕМОНТ ПОД КЛЮЧ',
        info: 'lorem1'
    },
    {
        id: 2,
        img_url: '/images/projects/chastniy2.jpg',
        title: 'СТРОИТЕЛЬСТВО ЧАСТНЫХ ДОМОВ И КОММЕРЧЕСКИХ ОБЪЕКТОВ',
        info: 'lorem1'
    },
    {
        id: 3,
        img_url: '/images/projects/fasad.jpg',
        title: 'ФАСАДНЫЕ РАБОТЫ ДОМОВ',
        info: 'lorem1'
    },
    {
        id: 4,
        img_url: '/images/projects/loyiha.jpg',
        title: 'Проектирование и дизайн-интерьер',
        info: 'lorem1'
    },
    {
        id: 5,
        img_url: '/images/projects/metal3.jpg',
        title: 'ИЗГОТАВЛИВАЕМ ИЗ МЕТАЛОКОНСТРУКЦИИ',
        info: 'lorem1'
    }
])



const navigateToPage = (cardId) => {
    router.push({ name: 'other', params: { id: cardId } });
};

</script>
<template>
    <div class="service-main">
        <div class="bg-service">
            <div class="bg-image">

            </div>
            <h2>{{ $t('our_services') }}</h2>
        </div>
        <div class="cards">
            <div v-for="item in cards" :key="item.id" class="card" data-aos="flip-down">
                <img :src="item.img_url" alt="">
                <p class="title">{{ item.title }}</p>
             
                <button @click="()=>navigateToPage(item.title)">{{ $t('more') }}...</button>
            </div>


        </div>

    </div>
</template>

<style scoped>
.bg-image {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: var(--greenColor);
    opacity: .6;
}

.bg-service {
    background-attachment: fixed;
    position: relative;
    width: 100%;
    height: 30vh;
    background-image: url('/images/home-repairs.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.title{
    text-transform: uppercase;
}

.service-main {
    background-color: #f5f5f6;
    padding-bottom: 20px;
}

.service-main h2 {
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

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%;
    margin: 50px 0;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    height: 400px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px rgb(173, 173, 173);
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: 10px;

}

.card .title {
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    font-family: 'Abril Fatface';
}

.card .info {
    line-height: 1.7;
}

.card button {
    padding: 7px;
    width: 200px;
    text-align: center;
    background-color: var(--greenColor);
    color: white;
    border: none;
    font-weight: 500;
    cursor: pointer;
    font-size: 18px;
    transition: .3s;
    margin-bottom: 10px;
}

.card button:hover {
    color: rgb(211, 211, 211);
}

.card img {
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .service-main h2 {
        text-align: center;
        left: 10%;
        font-size: 35px;
    }
}
</style>