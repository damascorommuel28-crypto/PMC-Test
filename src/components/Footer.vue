<template>
  <footer class="pmc-footer relative isolate overflow-hidden bg-[#071225] text-white">

    <!-- BACKGROUND LAYERS -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#071225] via-[#0b1b33] to-[#071225] pointer-events-none"></div>

    <div class="absolute -top-24 -right-24 w-72 h-72 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- CONTENT -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-20">

      <!-- TOP -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

        <!-- BRAND -->
        <div>

          <div class="flex items-center gap-3 mb-6">

            <!-- ICON -->
            <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-red-500/30">
              ✚
            </div>

            <!-- TEXT -->
            <div class="leading-tight">

              <div class="flex items-center gap-2">

                <h2 class="text-2xl font-bold text-white">
                  Providers Medical Center
                </h2>

                <!-- PHSC BADGE -->
                <span class="px-2 py-0.5 text-[10px] font-semibold tracking-widest text-red-200 border border-red-400/40 rounded-md bg-red-500/10">
                  PHSC
                </span>

              </div>

              <span class="text-xs text-white/60 tracking-wide">
                Healthcare • Medical Center
              </span>

            </div>

          </div>

          <p class="text-white/70 text-sm max-w-sm leading-relaxed">
            Excellence in healthcare. We're committed to delivering compassionate, evidence-based care.
          </p>

          <!-- SOCIAL -->
          <div class="flex gap-3 mt-6">

            <a
              v-for="(s, i) in socials"
              :key="i"
              href="#"
              class="w-10 h-10 flex items-center justify-center rounded-full
                     bg-white/5 border border-white/10
                     hover:bg-white/10 hover:-translate-y-1 transition cursor-pointer"
              v-html="s"
            />

          </div>

        </div>

        <!-- NEWSLETTER -->
        <div class="flex items-end">

          <div class="w-full">

            <h3 class="text-xl font-semibold text-white mb-3">
              Stay Updated
            </h3>

            <p class="text-white/60 text-sm mb-4">
              Get health tips and medical updates.
            </p>

            <div class="flex gap-2">

              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 rounded-lg text-sm
                       bg-white/5 border border-white/10
                       text-white placeholder-white/40
                       focus:outline-none focus:border-red-400"
              />

              <button
                class="px-6 py-3 bg-red-500 hover:bg-red-600
                       text-white rounded-lg font-semibold transition"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      <!-- DIVIDER -->
      <div class="h-px bg-white/10 mb-12"></div>

      <!-- LINKS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

        <div>
          <h4 class="text-sm uppercase tracking-widest text-white mb-5">Services</h4>
          <ul class="space-y-3 text-sm text-white/70">
            <li v-for="item in services" :key="item">
              <a class="hover:text-sky-300 transition cursor-pointer">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm uppercase tracking-widest text-white mb-5">Company</h4>
          <ul class="space-y-3 text-sm text-white/70">
            <li v-for="item in company" :key="item">
              <a class="hover:text-sky-300 transition cursor-pointer">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm uppercase tracking-widest text-white mb-5">Resources</h4>
          <ul class="space-y-3 text-sm text-white/70">
            <li v-for="item in resources" :key="item">
              <a class="hover:text-sky-300 transition cursor-pointer">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div class="sm:col-span-2 lg:col-span-1">

          <h4 class="text-sm uppercase tracking-widest text-white mb-5">
            Contact
          </h4>

          <div class="space-y-3 text-sm text-white/70">

            <div class="p-3 rounded-lg bg-white/5 border border-white/10">
              +63 9XX XXX XXXX
            </div>

            <div class="p-3 rounded-lg bg-white/5 border border-white/10">
              pmc@email.com
            </div>

            <div class="p-3 rounded-lg bg-white/5 border border-white/10">
              Isabela, Philippines
            </div>

          </div>

        </div>

      </div>

      <!-- DIVIDER -->
      <div class="h-px bg-white/10 mb-8"></div>

      <!-- BOTTOM -->
      <div class="flex justify-between items-center">

        <div class="text-xs text-white/50 space-x-4">
          <a class="hover:text-sky-300 cursor-pointer">Privacy</a>
          <a class="hover:text-sky-300 cursor-pointer">Terms</a>
          <a class="hover:text-sky-300 cursor-pointer">HIPAA</a>
          <a class="hover:text-sky-300 cursor-pointer">Accessibility</a>

          <p class="mt-4 text-white/40">
            © 2026 PMC IT 
          </p>
        </div>

        <!-- STATUS BADGE -->
         <span class="flex items-center gap-2 px-4 py-2 rounded-full
             bg-red-500/10 border border-red-400/20">

  <!-- PULSE DOT -->
  <span class="relative flex h-2 w-2">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
  </span>

  <!-- TEXT WITH HEARTBEAT -->
  <span class="text-xs text-red-200 font-semibold heartbeat">
    Open 24/7 Emergency
  </span>

</span>

      </div>

    </div>
  </footer>
</template>

<script setup>
const services = ["Anesthesia", "Pediatrics", "Surgery", "Radiology", "Laboratory"]
const company = ["About us", "Doctors", "Careers", "News & events"]
const resources = ["Health blog", "FAQ", "Appointments", "Patient portal"]

const socials = [
  `<svg class="w-5 h-5 text-sky-300" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
]
</script>

<style scoped>
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(0.98);
  }
  75% {
    transform: scale(1.08);
  }
}

.heartbeat {
  display: inline-block;
  animation: heartbeat 1.4s infinite ease-in-out;
}</style>