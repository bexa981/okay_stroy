<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue';
import CallsUs from '../components/CallsUs.vue';
import AboutUs from '../components/AboutUs.vue';
import Services from '../components/Services.vue';
import Projects from '../components/Projects.vue';
import Clients from '../components/Clients.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <div>
  <header>
    <Navbar />
    <Header/>
  </header>
  <main>
   <CallsUs/>
   <AboutUs/>
   <Services/>
   <Projects/>
   <Clients/>
 
  </main>

  <footer>
    <Contact/>
  </footer>
</div>
</template>
