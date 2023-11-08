<script setup>
import Instagram from './Icons/Instagram.vue';
import Facebook from './Icons/Facebook.vue';
import Youtube from './Icons/Youtube.vue';
import { ref, onMounted, onUnmounted } from 'vue';

const isNavbarFixed = ref(false);

    // Event handler for the scroll event
    const handleScroll = () => {
      isNavbarFixed.value = window.scrollY > 100; // Adjust the scroll threshold as needed
    };

    // Add the scroll event listener when the component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // Remove the scroll event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    isNavbarFixed
      
</script>

<template>
    <transition name="navbar-fade" mode="out-in">
    <div class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
        <div class="left-nav">
            <div class="logo">
                <img src="/images/logo/ok-stroy2.png" alt="">
            </div>
            <div class="social">
                <a href="">
                    <Facebook class="icons" />
                </a>
                <a href="">
                    <Instagram class="icons" />
                </a>
                <a href="">
                    <Youtube class="icons" />
                </a>
            </div>
        </div>
        <div class="right-nav">
            <div class="links">
                <a href="">Home</a>
                <a href="">About us</a>
                <a href="">Service</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
            <select name="language" id="language">
                <option value="ru">ru</option>
                <option value="uz">uz</option>
            </select>
        </div>


    </div>
</transition>
</template>

<style scoped>

.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out; /* Add a smooth transition for the fixed navbar */
  
}


.logo img {
    width: 200px;

}
.navbar{
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-bottom: 30px;
    transition: top 0.3s; /* Add a smooth transition effect on the top property */
}
.left-nav{
    display: flex;
    gap: 50%;
    align-items: center;
}
.social{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    margin-top: 30px;
    position: relative;
    z-index: 5;
}
.left-nav .icons{
  width: 25px;
  height: auto;
  color: var(--blueColor);
  transition: .3s;
}
.left-nav .icons:hover{
    color: var(--greenColor);
}
.right-nav{
    display: flex;
    gap: 40px;
    margin-top: 30px;
    align-items: center;
}
.links{
    display: flex;
    gap: 30px;
  
}
.links a{
    text-decoration: none;
    font-weight: 600;
    color: var(--blueColor);
    transition: .3s;
    position: relative;
    z-index: 5;
}
.links a:hover{
    color: var(--greenColor);
}
.right-nav select{
    padding: 5px;
    font-size: 18px;
    background-color: var(--greenColor);
    color: white;
    border-radius: 10px;
    border: none;
}
@media only screen and (max-width: 1200px) {
  .links{
    display: none;
  }
  .social{
    display: none;
  }
}
</style>