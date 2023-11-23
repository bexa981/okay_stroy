
<script>
  import { ref } from 'vue';
  
  export default {
    props: {
      imageUrl: String,
    },
    setup(props, { emit }) {
      const closeFullScreen = () => {
        emit('close');
      };
  
      return {
        closeFullScreen,
      };
    },
  };
  </script>
<template>
    <div class="full-screen-image" @click="closeFullScreen">
      <img :src="imageUrl" alt="Full Screen Image">
    </div>
  </template>
  
  
  
  <style scoped>
  /* Add some styling for the full-screen image */
  .full-screen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
  </style>