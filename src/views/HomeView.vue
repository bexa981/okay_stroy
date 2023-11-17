<script setup>
import Navbar from '../components/Navbar.vue'
import Header from '../components/Header.vue';
import CallsUs from '../components/CallsUs.vue';
import AboutUs from '../components/AboutUs.vue';
import Services from '../components/Services.vue';
import Projects from '../components/Projects.vue';
import Clients from '../components/Clients.vue';
import Contact from '../components/Contact.vue';
import WhyisMe from '../components/WhyisMe.vue';
</script>

<template>
  <div>
    <header>
      <section id="section1">
        <Navbar />
        <Header />
      </section>



    </header>
    <main>
      <CallsUs />
      <section id="section2">
        <AboutUs />
      </section>
      <WhyisMe />
      <section id="section3">
        <Services />

      </section>
      <section id="section4">
        <Projects />

      </section>
      <Clients />

    </main>

    <footer>
      <section id="section5">
        <Contact />

      </section>
    </footer>
  </div>
</template>
