<script setup>

</script>

<template>
    <div class="main">
        <h2>{{ $t('whyme') }}</h2>

        <div class="cards">
            <div class="card">
                <img src="../components/Icons/satisfaction.png" alt="">
                <h3>{{ $t('guarantee') }}</h3>
                <p>{{ $t('guarantee_info') }}</p>
            </div>
            <div class="card">
                <img src="../components/Icons/document.png" alt="">
                <h3>{{ $t('otchot') }}</h3>
                <p>{{ $t('otchot_info') }}</p>
            </div>
            <div class="card">
                <img src="../components/Icons/money.png" alt="">
                <h3>{{ $t('seni') }}</h3>
                <p>{{ $t('seni_info') }}</p>
            </div>
            <div class="card">
                <img src="../components/Icons/contract2.png" alt="">
                <h3>{{ $t('dogovor') }}</h3>
                <p>{{ $t('dogovor_info') }}</p>
            </div>
            <div class="card">
                <img src="../components/Icons/gift.png" alt="">
                <h3>{{ $t('podarok') }}</h3>
                <p>{{ $t('podarok_info') }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main{
    padding: 20px;
    background-color: #f5f5f6;
    padding-bottom: 100px;
   
}
.main h2{
 text-align: center;
 margin: 30px;
}
 .cards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
 }
 .card{
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    line-height: 1.6;
 }
 .card img{
    width: 70px;
 }
</style>