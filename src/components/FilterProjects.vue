<template>
  <div>
    <div class="btns">
      <button :class="{ active: activeFilter === 'all' }" @click="filterItems('all')">{{ $t('all') }}</button>
      <button :class="{ active: activeFilter === 'filter-1' }" @click="filterItems('filter-1')">{{ $t('filter1') }}</button>
      <button :class="{ active: activeFilter === 'filter-2' }" @click="filterItems('filter-2')">{{ $t('filter2') }}</button>
      <button :class="{ active: activeFilter === 'filter-3' }" @click="filterItems('filter-3')">{{ $t('filter4') }}</button>
      <button :class="{ active: activeFilter === 'filter-4' }" @click="filterItems('filter-4')">{{ $t('filter3') }}</button>
      <!-- Add more filter buttons as needed -->
    </div>
    <transition name="fade" mode="out-in">
    <div :key="activeFilter" class="images animated-container">
      <div v-for="item in filteredItems" :key="item.id">
        <img  class="full-screen-trigger"  @click="toggleFullScreen" :src="item.src" alt="">
        <img  class="full-screen-trigger"  @click="toggleFullScreen"  :src="item.src2" alt="">
        <img  class="full-screen-trigger"  @click="toggleFullScreen"  :src="item.src3" alt="">
        <img  class="full-screen-trigger"  @click="toggleFullScreen"  :src="item.src4" alt="">
        <img  class="full-screen-trigger"  @click="toggleFullScreen"  :src="item.src5" alt="">
        <img  class="full-screen-trigger"  @click="toggleFullScreen"  :src="item.src6" alt="">
      </div>
    </div>
    </transition>
    <div v-if="isFullScreen" class="full-screen-overlay" @click="closeFullScreen">
      <img :src="imgUrl" :style="{ filter: filterStyle }" alt="Filtered Image" class="full-screen-image" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const items = ref([
      { id: 1, src: '/images/projects/spalniy1.jpg',src2: '/images/projects/spalniy2.jpg',src3: '/images/projects/spalniy3.png',src4: '/images/projects/spalniy4.jpeg',src5: '/images/projects/spalniy5.jpg',src6: '/images/projects/spalniy6.png', class: 'filter-1' },
      { id: 2, src: '/images/projects/inter1.jpg',src2: '/images/projects/inter2.jpg',src3: '/images/projects/inter3.jpg',src4: '/images/projects/inter4.jpg',src5: '/images/projects/inter5.jpg',src6: '/images/projects/inter6.jpg', class: 'filter-2' },
      { id: 3, src: '/images/projects/design1.jpg', src2: '/images/projects/design3.jpg', src3: '/images/projects/neo3.png',src4: '/images/projects/neo4.jpg',src5: '/images/projects/neo5.jpg',src6: '/images/projects/neo6.jpg', class: 'filter-3' },
      { id: 4, src: '/images/projects/detskiy1.jpg',src2: '/images/projects/detskiy2.jpg',src3: '/images/projects/detskiy3.jpg',src4: '/images/projects/detskiy4.jpg',src5: '/images/projects/detskiy5.jpg',src6: '/images/projects/detskiy6.jpg', class: 'filter-4' },
      // Add more items with respective classes for filtering
    ]);
    const imgUrl = ref([{}])
    const isFullScreen = ref(false);
    const filterStyle = ref('none'); // Default filter style
    const activeFilter = ref('all');

    const toggleFullScreen = () => {
      isFullScreen.value = !isFullScreen.value;
      if( (imgUrl.value == items.src)||(imgUrl.value==items.src2)){
        return imgUrl.value
      }
     
    };

    const closeFullScreen = () => {
      isFullScreen.value = false;
    };
 
    const applyFilter = () => {
      filterStyle.value = 'grayscale(100%)'; // Example: Grayscale filter
    };
    const filterItems = (filter) => {
      activeFilter.value = filter;
    };

    const filteredItems = computed(() => {
      if (activeFilter.value === 'all') {
        return items.value;

      }
      return items.value.filter((item) => item.class === activeFilter.value);
    });

    return {
      filterItems,
      filteredItems,
      activeFilter,
      isFullScreen,
      filterStyle,
      toggleFullScreen,
      closeFullScreen,
      applyFilter,
      imgUrl
   
    
    };
  },
};
</script>

<style scoped>
.full-screen-trigger {
  cursor: pointer;
  width: 300px;
  /* Add additional styling for the thumbnail image if needed */
}

.full-screen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.full-screen-image {
  max-width: 100%;
  max-height: 100%;
}
.active {
  /* Add your desired color for the active button */
  color: var(--greenColor);
}
.animated-container {
  transition: opacity 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

img {
 
  transition: .3s;
}
.images img{
  height: 200px;
}
img:hover {
  transform: scale(1.1);
}

.images {
  display: flex;
  flex-wrap: wrap;
  
}

.btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10%;
  margin: 40px 0;

}
.btns button{
  margin-top: 20px;
  text-transform: uppercase;
}

.btns button {
  font-size: 18px;
  border: none;
  background-color: white;
  cursor: pointer;
  transition: .3s;
}

.btns button:hover {
  color: var(--greenColor);
}
@media only screen and (max-width: 600px) {
  .images{
   justify-content: center;
   align-items: center;
   text-align: center;
  }
}

</style>