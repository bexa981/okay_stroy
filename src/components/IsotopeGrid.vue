<script setup>
import { ref, onMounted } from 'vue';
import Isotope from 'isotope-layout';

const isotope = ref(null);
    const items = ref([
      { category: 'category1',image:'/images/projects/03.jpg' },
      { category: 'category2',image:'/images/projects/04.jpg' },
      { category: 'category3',image:'/images/projects/06.jpg' },
      { category: 'category4',image:'/images/projects/07.jpg' },
      // Add more items with categories as needed
    ]);

    const filter = (filterValue) => {
      isotope.value.arrange({ filter: filterValue });
    };

    onMounted(() => {
      isotope.value = new Isotope(document.querySelector('.grid'), {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      });
    });
    items,
    filter
</script>

<template>
      <div class="projects">
    <div class="filters">
      <button @click="filter('all')">All projects</button>
      <button @click="filter('category1')">Category 1</button>
      <button @click="filter('category2')">Category 2</button>
      <button @click="filter('category3')">Category 3</button>
      <button @click="filter('category4')">Category 4</button>
      <!-- Add more filter buttons as needed -->
    </div>

    <div class="grid" ref="grid">
      <div class="grid-item" v-for="(item, index) in items" :key="index" :class="item.category">
        <img :src="item.image" alt="image">
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-item img{
 width: 300px;
}
.grid{
    display: grid;
    height: 300px!important;
    margin-bottom: 50px;
}

.filters{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    padding: 10px;
    margin: 50px 0;
}
.filters button{
    border: none;
    background-color: white;
    font-size: 18px;
    cursor: pointer;
    color: var(--blueColor);

}
</style>