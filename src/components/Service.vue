<template>
  <section class="relative py-24 px-5 overflow-hidden">

    <!-- BACKGROUND BLOBS -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40"></div>

    <div class="max-w-7xl mx-auto relative z-10">

      <!-- HEADER -->
      <div class="text-center mb-20">
        <span class="text-red-600 text-[11px] tracking-[4px] font-semibold uppercase">
          Our Services
        </span>

        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
          Medical & General Care
        </h2>

        <p class="text-gray-500 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
          Precision-driven healthcare services built for safety, comfort, and modern clinical standards.
        </p>
      </div>

      <!-- GRID -->
      <div class="grid md:grid-cols-3 gap-10">

        <div
          v-for="(s, i) in services"
          :key="i"
          class="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
          @click="openModal(s)"
        >

          <!-- ICON BADGE -->
          <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50
                      border border-red-100 mb-5 group-hover:bg-red-100 transition">

            <component
              :is="s.icon"
              class="w-5 h-5 text-red-600 transition group-hover:scale-110"
            />

          </div>

          <!-- TITLE -->
          <h3 class="text-base font-semibold text-gray-900 group-hover:text-red-600 transition">
            {{ s.title }}
          </h3>

          <!-- DESCRIPTION -->
          <p class="text-sm text-gray-500 mt-2 leading-relaxed">
            {{ s.desc }}
          </p>

          <!-- HOVER LINK -->
          <div class="mt-4 text-xs text-red-600 opacity-0 group-hover:opacity-100 transition">
            View details →
          </div>

        </div>

      </div>

    </div>

    <!-- MODAL -->
    <div
      v-if="selected"
      class="fixed inset-0 bg-black/25 backdrop-blur-md flex items-center justify-center px-4 z-50"
      @click.self="closeModal"
    >

      <div class="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <div class="flex items-center gap-3 mb-5">

          <div class="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 border border-red-100">
            <component :is="selected.icon" class="w-5 h-5 text-red-600" />
          </div>

          <h2 class="text-xl font-bold text-gray-900">
            {{ selected.title }}
          </h2>

        </div>

        <p class="text-sm text-gray-500 leading-relaxed">
          {{ selected.fullDesc }}
        </p>

        <button
          @click="closeModal"
          class="mt-8 text-sm text-red-600 hover:tracking-wide transition"
        >
          Close
        </button>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from "vue"

import {
  Stethoscope,
  Baby,
  Scissors,
  Hospital,
  HeartPulse,
  Radio,
  FlaskConical,
  Pill,
  Activity,
} from "lucide-vue-next"

const selected = ref(null)

const services = [
  { icon: Stethoscope, title: "Anesthesia", desc: "Safe anesthesia services.", fullDesc: "Advanced anesthesia care ensuring patient safety during procedures." },
  { icon: Baby, title: "Pediatric Services", desc: "Child healthcare services.", fullDesc: "Complete pediatric consultation and treatment services." },
  { icon: Scissors, title: "Surgery Services", desc: "Modern surgical care.", fullDesc: "High precision surgical procedures with expert doctors." },
  { icon: Hospital, title: "Medical Services", desc: "General consultation.", fullDesc: "Comprehensive inpatient and outpatient care services." },
  { icon: HeartPulse, title: "OB-Gynecology", desc: "Women’s health care.", fullDesc: "Full reproductive and maternal health services." },
  { icon: Radio, title: "Radiology", desc: "Diagnostic imaging.", fullDesc: "High accuracy imaging for diagnosis and treatment." },
  { icon: FlaskConical, title: "Laboratory", desc: "Lab diagnostics.", fullDesc: "Fast and reliable laboratory test services." },
  { icon: Pill, title: "Pharmacy", desc: "Medicine dispensing.", fullDesc: "Safe pharmaceutical services and medication access." },
  { icon: Activity, title: "Hemodialysis", desc: "Kidney treatment.", fullDesc: "Advanced dialysis care for kidney patients." }
]

const openModal = (s) => selected.value = s
const closeModal = () => selected.value = null
</script>