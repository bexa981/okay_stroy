<script setup>
import Navbar from '../components/Navbar.vue';
import {useRoute} from 'vue-router'
const route = useRoute();
</script>
<template>
<Navbar/>
    <div class="service-main">
        <h1> {{ route.query.info|| '?' }}</h1>
        
    <table border="">
        <tr>
            <td>{{ route.query.info1|| '' }}</td>
            <td>{{ route.query.info2|| '' }} </td>
            <td>{{ route.query.info3|| '' }}</td>
            <td>{{ route.query.info4|| '' }}</td>
        </tr>
        <tr colspan="4">
            <td>{{ route.query.bioTitle|| '' }}</td>
        </tr>
        <tr>
            <td>{{ route.query.bio1|| '' }}</td>
            <td>{{ route.query.bio2|| '' }}</td>
            <td>{{ route.query.bio3|| '' }}</td>
            <td>{{ route.query.bio4|| '' }}</td>
        </tr>
    </table>
    </div>
</template>

<style scoped>
.service-main{
    display: flex;
    flex-direction: column;
    background-image: url('https://www.fprestoration.com/assets/content/content-v4-bg.2304271553353.jpg');
    background-size: cover;
    background-position: top;
    align-items: center;
    gap: 50px;
    margin-top: 30px;
    height: 80vh;
    
}
table{
    width: 80%;
}
table th{
 font-size: 25px;
}
table td{
    font-size: 22px;
}
</style>