<template>
  <div class="bg-white text-gray-900 antialiased">

    <Navbar class="sticky top-0 bg-white/80 backdrop-blur-md z-50" />

    <Carousel />

    <Overlook />

    <new />

    <Service />

    <Footer />

  </div>
</template>

<script setup>
import { useScrollReveal } from "./composables/useScrollReveal.js"

useScrollReveal()

import Navbar from "./components/Navbar.vue"
import Carousel from "./components/Carousel.vue"
import Overlook from "./components/Overlook.vue"
import New from "./components/News.vue"
import Service from "./components/service.vue"
import Footer from "./components/Footer.vue"
</script>