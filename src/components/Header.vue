<template>
    <div class="header">
     <div class="person">
        <img src="/images/bg-image.png" alt="">
        
    </div>
    <div class="head-info">
        <p class="title">Okay Stroy</p>
    <p class="info">EXPERTISE YOU CAN TRUST</p>
    </div>
    
    
    </div>
</template>

<style scoped>
.header{
    position: relative;
    width: 100%;
    height: fit-content;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/slide01.jpg');
    display: flex;
    justify-content: center;
}
.head-info{
    position: absolute;
    width: 100%;
    top: 200px;
    text-align: center;
}
.head-info .title{
    margin-left: -10%;
    font-size: 9em;
    font-weight: 400;
    color: white;
    font-family: 'Abril Fatface', serif;;
}
.head-info .info{
    margin-left: -10%;
    text-align: center;
    font-size: 35px;
    color: white;
    font-weight: 500;
}
.person img{
    width: 90%;
    margin-top: -70px;
}

@media only screen and (max-width: 1200px) {
    .header{
    position: relative;
    width: 100%;
    height: fit-content;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/slide01.jpg');
    display: flex;
    justify-content: center;
}

.head-info .title{
  
    text-align: center;
    font-size: 6rem;
    font-weight: 400;
    color: white;
    font-family: 'Abril Fatface', serif;;
}
.head-info .info{
    text-align: center;
    font-size: 100%;
    color: white;
    font-weight: 500;
}
}
@media only screen and (max-width: 600px) {
    .head-info{
        top: 35%;
    }
    .head-info .title{
  margin-left: 0;
  font-size: 4rem;
    }
    .head-info .info{
margin-left: 0;
    }
    .person img{
        width: 100%;
        margin-top: -30px;
    }
}
</style>