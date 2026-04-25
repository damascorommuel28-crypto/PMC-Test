<template>
  <section
    ref="heroRef"
    class="relative w-full overflow-hidden bg-white select-none"
  >

    <!-- IMAGE LAYER -->
    <div class="relative w-full h-screen md:h-[720px] overflow-hidden">

      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="absolute inset-0 will-change-transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        :class="currentIndex === i
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-105 pointer-events-none'"
      >

        <!-- IMAGE -->
        <div
          class="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          :style="{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`
          }"
        >
          <img
            :src="slide.image"
            class="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent"></div>

        <!-- FLOATING LIGHT EFFECTS -->
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div class="absolute bottom-0 -left-48 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full animate-pulse"></div>

      </div>
    </div>

    <!-- CONTENT -->
    <div class="absolute inset-0 flex items-center px-6 md:px-12 lg:px-16">
      <div class="w-full max-w-4xl">

        <transition
          mode="out-in"
          enter-active-class="transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          enter-from-class="opacity-0 translate-y-6 blur-sm"
          enter-to-class="opacity-100 translate-y-0 blur-0"
          leave-active-class="transition duration-500 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div :key="currentIndex" class="space-y-6">

            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100">
              <span class="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <p class="text-red-700 text-xs font-semibold">
                PROVIDERS MEDICAL CENTER
              </p>
            </div>

            <h1 class="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
              {{ slides[currentIndex].title }}
            </h1>

            <p class="text-gray-600 text-lg max-w-2xl leading-relaxed">
              {{ slides[currentIndex].desc }}
            </p>

            <div class="flex gap-4">
              <button
                class="px-6 py-3 bg-red-600 text-white rounded-xl
                       transition-all duration-300 ease-out
                       hover:scale-105 active:scale-95 shadow-md"
              >
                {{ slides[currentIndex].primary }}
              </button>

              <button
                class="px-6 py-3 border border-gray-900 rounded-xl
                       transition-all duration-300 ease-out
                       hover:bg-gray-900 hover:text-white hover:scale-105 active:scale-95"
              >
                {{ slides[currentIndex].secondary }}
              </button>
            </div>

          </div>
        </transition>

      </div>
    </div>

    <!-- ARROWS -->
    <button
      @click="previousSlide"
      class="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl
             opacity-60 hover:opacity-100 transition"
    >
      ‹
    </button>

    <button
      @click="nextSlide"
      class="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl
             opacity-60 hover:opacity-100 transition"
    >
      ›
    </button>

    <!-- DOTS -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        v-for="(s, i) in slides"
        :key="i"
        @click="goToSlide(i)"
        class="transition-all duration-500 ease-out rounded-full"
        :class="currentIndex === i
          ? 'bg-red-600 w-8 h-2'
          : 'bg-white/60 w-2 h-2 hover:scale-125'"
      />
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const hero1 = new URL("../assets/img/pmc1.jpg", import.meta.url).href
const hero2 = new URL("../assets/img/pmc2.jpg", import.meta.url).href
const hero3 = new URL("../assets/img/pmc3.jpg", import.meta.url).href

const heroRef = ref(null)

const currentIndex = ref(0)
const parallaxOffset = ref(0)

let interval = null
let raf = null

const slides = [
  {
    image: hero1,
    title: "Your Health, Our Priority",
    desc: "Providing compassionate healthcare and trusted medical excellence.",
    primary: "Book Appointment",
    secondary: "Find Doctor"
  },
  {
    image: hero2,
    title: "Advanced Medical Services",
    desc: "Modern facilities and expert specialists for complete care.",
    primary: "View Services",
    secondary: "Learn More"
  },
  {
    image: hero3,
    title: "Expert Care Every Day",
    desc: "Dedicated professionals committed to your wellness.",
    primary: "Meet Team",
    secondary: "Specialties"
  }
]

// SMOOTH SLIDE SWITCH (no jitter)
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const previousSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (i) => {
  currentIndex.value = i
}

// ULTRA SMOOTH PARALLAX (RAF-based)
const handleMouseMove = (e) => {
  if (!heroRef.value) return

  cancelAnimationFrame(raf)

  raf = requestAnimationFrame(() => {
    const rect = heroRef.value.getBoundingClientRect()
    const y = e.clientY - rect.top
    parallaxOffset.value = (y - rect.height / 2) * 0.03
  })
}

const startAuto = () => {
  interval = setInterval(() => {
    nextSlide()
  }, 7000)
}

onMounted(() => {
  startAuto()
  window.addEventListener("mousemove", handleMouseMove)
})

onBeforeUnmount(() => {
  clearInterval(interval)
  window.removeEventListener("mousemove", handleMouseMove)
  cancelAnimationFrame(raf)
})
</script>