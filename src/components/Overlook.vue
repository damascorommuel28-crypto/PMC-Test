<template>
  <section class="relative py-24 px-5 overflow-hidden reveal">

    <!-- background blobs -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40"></div>

    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

      <!-- LEFT IMAGE -->
      <div class="relative">

        <div class="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="../assets/img/pmc1.jpg"
            class="w-full h-[520px] object-cover"
          />
        </div>

        <!-- EXPERIENCE BADGE -->
        <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
          <h3 class="text-3xl font-extrabold text-red-600">25+</h3>
          <p class="text-sm text-gray-500">Years Medical Excellence</p>
        </div>

        <!-- FLOAT CARDS -->
        <div class="floating absolute top-10 -right-5 bg-white rounded-xl shadow-lg px-5 py-3 text-sm font-semibold text-gray-700 hidden md:flex items-center gap-2">
          <ShieldCheck class="w-4 h-4 text-red-600" />
          Trusted Healthcare
        </div>

        <div class="floating2 absolute bottom-28 -right-8 bg-white rounded-xl shadow-lg px-5 py-3 text-sm font-semibold text-gray-700 hidden md:flex items-center gap-2">
          <Star class="w-4 h-4 text-red-600" />
          Patient Satisfaction
        </div>

      </div>

      <!-- RIGHT CONTENT -->
      <div>
        <span class="inline-block text-red-600 font-bold tracking-[3px] text-xs mb-4">
          WE PROVIDE
        </span>

        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Complete Health Care Solutions For You
        </h2>

        <p class="text-gray-500 leading-7 mb-10 max-w-xl">
          Delivering compassionate, modern and affordable medical services with highly trained professionals and advanced healthcare facilities for every patient.
        </p>

        <!-- FEATURES -->
        <div class="space-y-5">

          <div class="group flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div class="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
              <Stethoscope class="w-6 h-6 text-red-600" />
            </div>
            <div class="pointer-events-none">
              <h3 class="font-bold text-gray-800 group-hover:text-red-600 transition">
                Free Checkup
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                Routine consultation and preventive healthcare assessment for all patients.
              </p>
            </div>
          </div>

          <div class="group flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div class="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
              <UserCheck class="w-6 h-6 text-red-600" />
            </div>
            <div class="pointer-events-none"> 
              <h3 class="font-bold text-gray-800 group-hover:text-red-600 transition">
                Highly Professional Staff
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                Experienced doctors, nurses and specialists dedicated to patient care.
              </p>
            </div>
          </div>

          <div class="group flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div class="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
              <CreditCard class="w-6 h-6 text-red-600" />
            </div>
            <div class="pointer-events-none">
              <h3 class="font-bold text-gray-800 group-hover:text-red-600 transition pointer-none:">
                Affordable Pricing
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                Quality medical treatment and diagnostics at practical healthcare rates.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import {
  Stethoscope,
  UserCheck,
  CreditCard,
  ShieldCheck,
  Star
} from "lucide-vue-next"
</script>

<style scoped>
.floating {
  animation: floaty 4s ease-in-out infinite;
}

.floating2 {
  animation: floaty 4s ease-in-out infinite;
  animation-delay: 1.5s;
}

@keyframes floaty {
  0%,100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
</style>