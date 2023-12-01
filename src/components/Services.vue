<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const cards = ref([
    {
        id: 1,
        img_url: '/images/projects/kluch2.jpg',
        title: 'КАЧЕСТВЕННЫЙ РЕМОНТ РЕМОНТ ПОД КЛЮЧ',
        info1: 'ДИЗАЙНЕРСКИЙ РЕМОНТ',
        info2: "КАПИТАЛЬНЫЙ РЕМОНТ",
        info3: "КОСМЕТИЧЕСКИЙ РЕМОНТ",
        info4: "РЕМОНТ САНУЗЛОВ",
        bioTitle: "ЗАКАЖИТЕ РЕМОНТ У НАС И ПОЛУЧИТЕ:",
        bio1: "ОФИЦИАЛЬНЫЕ ГАРАНТИИ НА НАШИ РАБОТЫ ",
        bio2: "ДИЗАЙН-ИНТЕРЬЕР В ПОДАРОК ",
        bio3: "ОФИАЛЬНЫЙ ДОГОВОР ",
        bio4: "СОБЛЮДЕНИЕ СРОКОВ  "
    },
    {
        id: 2,
        img_url: '/images/projects/chastniy2.jpg',
        title: 'СТРОИТЕЛЬСТВО ЧАСТНЫХ ДОМОВ И КОММЕРЧЕСКИХ ОБЪЕКТОВ',
        bioTitle: "ЗАКАЖИТЕ У НАС СТРОИТЕЛЬСТВО ВАШИХ ОБЕКЪТОВ И ПОЛУЧИТЕ: ",
        bio1: "БЕСПЛАТНЫЙ ПРОЕКТ ",
        bio2: "ДИЗАЙН-ИНТЕРЬЕР В ПОДАРОК ",
        bio3: "ПРЕДВАРИТЕЛЬНУЮ СМЕТУ  ",
        bio4: "Круглосуточное наблюдение за стройкой с телефона  "
    },
    {
        id: 3,
        img_url: '/images/projects/fasad.jpg',
        title: 'ФАСАДНЫЕ РАБОТЫ ДОМОВ',
        info1: 'Вы построили дом, теперь осталось оформить фасад дома.',
        bioTitle:" Мы предлагаем оформить фасад вашего дома жидким Травертином.",
        bio1:'Наша компания готова оказать вам помощь.'

    },
    {
        id: 4,
        img_url: '/images/projects/loyiha.jpg',
        title: 'Проектирование и дизайн-интерьер',
        info1: 'Вы построили дом, теперь осталось оформить фасад дома,офисные помещении в Новостройках и хотите заказать Проектирование ли Дизайн-интьерьер.',
        bioTitle:" ",
        bio1:'Тогда наша компания к Вашим услугам..'
    },
    {
        id: 5,
        img_url: '/images/projects/metal3.jpg',
        title: 'ИЗГОТАВЛИВАЕМ ИЗ МЕТАЛОКОНСТРУКЦИИ',
        info1: 'СКЛАДЫ с ОБЩИВКОЙ СЕНДВИЧ ПАНЕЛЕЙ ',
        info2: "АНГАРЫ с ОБЩИВКОЙ СЕНДВИЧ ПАНЕЛЕЙ ",
        bioTitle: "ЗАКАЖИТЕ СТРОИТЕЛЬСТВО ИЗ МЕТАЛОКОНСТРУКЦИИ И ПОЛУЧИТЕ: ",
        bio1: "ОФИЦИАЛЬНЫЕ ГАРАНТИИ НА НАШИ РАБОТЫ",
        bio2: "ПРОЕКТ В ПОДАРОК  ",
        bio3: "ОФИАЛЬНЫЙ ДОГОВОР ",
        bio4: "СОБЛЮДЕНИЕ СРОКОВ  "
    }
])


const navigateToPage = (cardId, title, info,info1,info2,info3,info4,bioTitle,bio1,bio2, bio3,bio4) => {
    router.push(
        {
            name: 'other', params: { id: cardId }, query: { title, info,info1,info2,info3,info4,bioTitle,bio1, bio2,bio3,bio4}

        });
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
                <button @click="() => navigateToPage(item.id, item.info, item.title,item.info1,item.info2,item.info3,item.info4,item.bioTitle,item.bio1 , item.bio2, item.bio3,item.bio4)">{{ $t('more') }}...</button>
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

.title {
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