<script setup>
import Navbar from '../components/Navbar.vue';
const props = defineProps(['title','info'])
</script>
<template>
<Navbar/>
    <div class="service-main">
        <h1>{{ $route.params.id }} </h1>
        <h1>{{ props.title }}</h1>
        
    <table border="">
        <tr>
            <th>Service 1</th>
            <th>Service 2 </th>
            <th>Service 3</th>
            <th>Service 4</th>
        </tr>
        <tr>
            <td>Service info1</td>
            <td>Service info2</td>
            <td>Service info3</td>
            <td>Service info4</td>
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