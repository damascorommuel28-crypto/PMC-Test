<template>
  <!-- NAVBAR -->
  <nav :class="[
    'fixed top-0 w-full z-50 transition-all duration-500 outline-none',
    scrolled 
      ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-lg' 
      : 'bg-gradient-to-b from-white/50 to-transparent backdrop-blur-sm'
  ]"
  role="navigation"
  aria-label="Main Navigation">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

      <!-- LOGO SECTION -->
      <div class="flex items-center gap-3 shrink-0">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
          <div class="relative w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">
            ✚
          </div>
        </div>
        <div class="leading-tight">
          <h1 class="font-display text-lg font-bold text-gray-900 tracking-tight">
            Providers
          </h1>
          <p class="text-xs font-semibold text-red-600 tracking-widest">MEDICAL CENTER</p>
        </div>
      </div>

      <!-- DESKTOP MENU -->
      <div class="ml-auto hidden xl:flex items-center gap-1">

        <!-- SERVICES MEGA MENU -->
        <div 
          class="relative group"
          @mouseenter="activeMenu = 'services'"
          @mouseleave="activeMenu = null"
        >
          <button 
            :class="[
              'px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300',
              activeMenu === 'services' 
                ? 'text-red-600 bg-red-50/80' 
                : 'text-gray-700 hover:text-red-600 hover:bg-gray-50/50'
            ]" 
            class="rounded-lg"
            aria-haspopup="true"
            :aria-expanded="activeMenu === 'services'"
          >
            HEALTH SPECIALTIES
          </button>

          <!-- MEGA DROPDOWN -->
          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            leaveActiveClass="transition-all duration-300 ease-in"
            enterFromClass="opacity-0 -translate-y-2 pointer-events-none"
            leaveToClass="opacity-0 -translate-y-2 pointer-events-none"
          >
            <div 
              v-show="activeMenu === 'services'"
              class="absolute left-0 top-full pt-3"
            >
              <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 min-w-[900px]">
                <!-- Title -->
                <p class="text-xs font-bold text-gray-500 tracking-widest mb-5 uppercase">All Services</p>
                
                <!-- Grid -->
                <div class="grid grid-cols-3 gap-4 mb-6">
                  <a 
                    v-for="(item, idx) in services" 
                    :key="idx"
                    href="#" 
                    class="group/item px-4 py-3 rounded-xl text-[13px] text-gray-700 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100/50 hover:text-red-700 font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <span class="w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                    {{ item }}
                  </a>
                </div>

                <!-- Divider -->
                <div class="border-t border-gray-100 pt-6 mt-6">
                  <p class="text-xs font-bold text-gray-500 tracking-widest mb-4 uppercase">Quick Access</p>
                  <div class="flex gap-3">
                    <a href="#" class="flex-1 px-4 py-3 rounded-lg bg-blue-50 text-blue-700 text-[12px] font-semibold hover:bg-blue-100 transition text-center">
                      📋 Book Appointment
                    </a>
                    <a href="#" class="flex-1 px-4 py-3 rounded-lg bg-green-50 text-green-700 text-[12px] font-semibold hover:bg-green-100 transition text-center">
                      🏥 Find Doctor
                    </a>
                    <a href="#" class="flex-1 px-4 py-3 rounded-lg bg-purple-50 text-purple-700 text-[12px] font-semibold hover:bg-purple-100 transition text-center">
                      📞 Call Hotline
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- OTHER MENU ITEMS -->
        <div 
          v-for="menu in mainMenus" 
          :key="menu.id"
          class="relative group"
          @mouseenter="activeMenu = menu.id"
          @mouseleave="activeMenu = null"
        >
          <button 
            :class="[
              'px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300',
              activeMenu === menu.id 
                ? 'text-red-600 bg-red-50/80' 
                : 'text-gray-700 hover:text-red-600 hover:bg-gray-50/50'
            ]" 
            class="rounded-lg"
            aria-haspopup="true"
            :aria-expanded="activeMenu === menu.id"
          >
            {{ menu.title }}
          </button>

          <!-- DROPDOWN -->
          <Transition
            enterActiveClass="transition-all duration-300 ease-out"
            leaveActiveClass="transition-all duration-300 ease-in"
            enterFromClass="opacity-0 -translate-y-2 pointer-events-none"
            leaveToClass="opacity-0 -translate-y-2 pointer-events-none"
          >
            <div 
              v-show="activeMenu === menu.id"
              class="absolute left-0 top-full pt-3"
            >
              <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[280px]">
                <a
                  v-for="(sub, idx) in menu.items"
                  :key="idx"
                  href="#"
                  class="block px-4 py-3 rounded-lg text-[13px] text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100/50 hover:text-red-700 font-medium transition-all duration-300 flex items-center justify-between group/link"
                >
                  <span>{{ sub }}</span>
                  <span class="text-gray-300 group-hover/link:text-red-600 transition-colors">→</span>
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- MOBILE TOGGLE -->
      <button 
        @click="mobileOpen = !mobileOpen"
        class="xl:hidden flex flex-col gap-1.5 group"
        aria-label="Toggle Menu"
        :aria-expanded="mobileOpen"
      >
        <span :class="['w-6 h-0.5 bg-gray-800 transition-all duration-300', mobileOpen && 'rotate-45 translate-y-2']"></span>
        <span :class="['w-6 h-0.5 bg-gray-800 transition-all duration-300', mobileOpen && 'opacity-0']"></span>
        <span :class="['w-6 h-0.5 bg-gray-800 transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-2']"></span>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <Transition
      enterActiveClass="transition-all duration-300"
      leaveActiveClass="transition-all duration-300"
      enterFromClass="opacity-0 max-h-0"
      leaveToClass="opacity-0 max-h-0"
    >
      <div v-show="mobileOpen" class="xl:hidden bg-white border-t border-gray-100 overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 py-4 space-y-2">

          <!-- MOBILE SERVICES -->
          <div class="border-b border-gray-100 pb-4">
            <button
              @click="mobileActive = mobileActive === 'services' ? null : 'services'"
              class="w-full py-3 flex justify-between items-center text-[14px] font-bold text-gray-900 group"
            >
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                HEALTH SPECIALTIES
              </span>
              <svg :class="['w-5 h-5 transition-transform duration-300', mobileActive === 'services' && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <Transition
              enterActiveClass="transition-all duration-300"
              leaveActiveClass="transition-all duration-300"
              enterFromClass="opacity-0 max-h-0"
              leaveToClass="opacity-0 max-h-0"
            >
              <div v-show="mobileActive === 'services'" class="mt-3 pl-4 space-y-2 grid grid-cols-2 gap-2">
                <a 
                  v-for="(item, idx) in services" 
                  :key="idx"
                  href="#" 
                  class="px-3 py-2 rounded-lg text-[12px] text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition"
                >
                  {{ item }}
                </a>
              </div>
            </Transition>
          </div>

          <!-- MOBILE MENU ITEMS -->
          <div 
            v-for="menu in mainMenus"
            :key="menu.id"
            class="border-b border-gray-100 pb-4"
          >
            <button
              @click="mobileActive = mobileActive === menu.id ? null : menu.id"
              class="w-full py-3 flex justify-between items-center text-[14px] font-bold text-gray-900"
            >
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                {{ menu.title }}
              </span>
              <svg :class="['w-5 h-5 transition-transform duration-300', mobileActive === menu.id && 'rotate-180']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <Transition
              enterActiveClass="transition-all duration-300"
              leaveActiveClass="transition-all duration-300"
              enterFromClass="opacity-0 max-h-0"
              leaveToClass="opacity-0 max-h-0"
            >
              <div v-show="mobileActive === menu.id" class="mt-3 pl-4 space-y-2">
                <a
                  v-for="(sub, idx) in menu.items"
                  :key="idx"
                  href="#"
                  class="block py-2 text-[13px] text-gray-600 hover:text-red-600 font-medium transition"
                >
                  {{ sub }}
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </nav>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const activeMenu = ref(null)
const mobileOpen = ref(false)
const mobileActive = ref(null)

// Handle scroll effect
const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Data
const services = [
  "Anesthesia",
  "Pediatrics Services",
  "Surgery Services",
  "Medical Services",
  "OB-Gynecology",
  "Radiology Services",
  "Laboratory Services",
  "Pharmacy Services",
  "Hemodialysis Unit",
  "Eye Center",
  "Dental Services",
  "Emergency Care"
]

const mainMenus = [
  { 
    id: 'doctors',
    title: 'OUR DOCTORS', 
    items: ["Find Doctor", "Specialists", "Schedules", "Book Consultation"] 
  },
  { 
    id: 'patients',
    title: 'PATIENTS & VISITORS', 
    items: ["Admission Guide", "Billing Info", "Room Info", "Testimonials", "Payment Options"] 
  },
  { 
    id: 'news',
    title: 'NEWS & EVENTS', 
    items: ["Hospital News", "Events", "Announcements", "Blog"] 
  },
  { 
    id: 'health',
    title: 'HEALTH LIBRARY', 
    items: ["Health Articles", "Disease Info", "Prevention Tips", "FAQs"] 
  },
  { 
    id: 'about',
    title: 'ABOUT US', 
    items: ["History", "Mission & Vision",] 
  },
  { 
    id: 'contact',
    title: 'CONTACT', 
    items: ["Location", "Hotline", "Email",] 
  }
]
</script>

<style scoped>
.font-display {
  font-family: 'Poppins', 'system-ui', sans-serif;
}
</style>