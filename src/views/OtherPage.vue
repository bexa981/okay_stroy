<script setup>
import Navbar from '../components/Navbar.vue';
import { useRoute } from 'vue-router'
const route = useRoute();
</script>

<template>
    <Navbar />
    <div class="service-main">
        <div class="serviceTitle">

            <h1> {{ route.query.info || '?' }}</h1>
        </div>

        <div class="tableInfo">

            <div class="image">
                <img class="titleImg" :src="route.query.title" alt="sa">
                <div class="guarantee">
                    <img src="../components/Icons/shield.png" alt="">
                    <p>{{ $t('guarantee1') }} <br> {{ $t('guarantee2') }} </p>
                </div>
            </div>

            <div>

                <div>
                    <ul>
                        <li v-if="route.query.info1">{{ route.query.info1 || '' }}</li>
                        <li v-if="route.query.info2">{{ route.query.info2 || '' }}</li>
                        <li v-if="route.query.info3">{{ route.query.info3 || '' }}</li>
                        <li v-if="route.query.info4">{{ route.query.info4 || '' }}</li>
                        <li v-if="route.query.bioTitle" class="bioTitle">{{ route.query.bioTitle || '' }}</li>
                        <li v-if="route.query.bio1">{{ route.query.bio1 || '' }}</li>
                        <li v-if="route.query.bio2">{{ route.query.bio2 || '' }}</li>
                        <li v-if="route.query.bio3">{{ route.query.bio3 || '' }}</li>
                        <li v-if="route.query.bio4">{{ route.query.bio4 || '' }}</li>
                    </ul>
                  
                </div>
            </div>
        </div>





    </div>
</template>

<style scoped>
.service-main {
    display: flex;
    flex-direction: column;
    background-image: url('https://www.fprestoration.com/assets/content/content-v4-bg.2304271553353.jpg');
    background-size: cover;
    background-position: top;
    align-items: center;
    gap: 50px;
    margin-top: 30px;
   padding-bottom: 50px;

}
.bioTitle{
    font-weight: 600;
    color: var(--blueColor);
}
li{
    text-transform: uppercase;
    list-style: none;
    font-size: 20px;
    background-color: var(--greenColor);
    color: white;
    padding: 10px;
    border-radius: 15px;
    margin-top: 5px;
}
.tableInfo{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
}
.image {
    width: 500px;
}

.titleImg {
    width: 100%;
    border-radius: 30px 10px;
}

.guarantee {
    margin-top: -8px;
    border-radius: 30px 10px;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--blueColor);
    padding: 20px;
    margin-bottom: 10px;
}

.guarantee img {
    width: 50px;
}

.guarantee p {
    font-size: 22px;
    color: white;
    font-weight: 500;
}

table {
    width: 400px;
}

table th {
    font-size: 25px;
}

table td {
    font-size: 22px;
}

.serviceTitle {
    text-align: center;
    width: 80%;
    border-radius: 0px 0px 150px 150px;
    background: linear-gradient(90deg, rgb(112, 207, 48), var(--greenColor));
    padding: 100px 10px;
    color: white;
    height: auto;
}
@media only screen and (max-width: 600px) {
 .image{
    width: 380px;
 }
 li{
    width: 370px;
 }
 .bioTitle{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
 }
 ul{
    padding: 0;
    
 }

}
</style>