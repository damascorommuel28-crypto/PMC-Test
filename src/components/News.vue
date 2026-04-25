<template>
  <div class="bg-white text-slate-900">

    <!-- HERO -->
    <section class="py-20 px-6 border-b">
      <div class="max-w-5xl mx-auto text-center">

        <span class="text-sm text-red-500 font-medium">
          Latest Updates
        </span>

        <h1 class="text-4xl md:text-5xl font-semibold mt-3">
          News & <span class="text-red-500">Events</span>
        </h1>

        <p class="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
          Updates, health information, and hospital announcements.
        </p>

        <!-- FILTER -->
        <div class="flex justify-center gap-2 mt-10 flex-wrap">
          <button
            v-for="t in tabs"
            :key="t"
            @click="activeTab = t"
            :class="tabClass(t)"
          >
            {{ t }}
          </button>
        </div>

      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-16 px-6">
      <div class="max-w-5xl mx-auto">

        <!-- FEATURED -->
        <div class="mb-14">
          <h2 class="text-xl font-medium mb-6">Featured</h2>

          <div class="grid lg:grid-cols-3 gap-5">

            <!-- MAIN FEATURED -->
            <div
              class="lg:col-span-2 border rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 class="text-xl font-semibold">
                Cardiac Surgery Program Launch
              </h3>

              <p class="text-sm text-slate-500 mt-2">
                State-of-the-art cardiac surgery with international specialists.
              </p>

              <button
                class="text-red-500 text-sm mt-4 relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-red-500 hover:after:w-full after:transition-all"
              >
                Read more →
              </button>
            </div>

            <!-- SIDE -->
            <div class="space-y-3">

              <div
                v-for="f in featuredSide"
                :key="f.title"
                class="border rounded-lg overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div class="overflow-hidden">
                  <img
                    :src="f.image"
                    class="h-28 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div class="p-3">
                  <p class="text-sm font-medium">{{ f.title }}</p>
                  <p class="text-xs text-slate-400">{{ f.type }}</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- GRID -->
        <div class="grid md:grid-cols-2 gap-6">

          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="border rounded-xl p-5 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
          >

            <!-- IMAGE -->
            <div class="overflow-hidden rounded-lg mb-4">
              <img
                :src="item.image"
                class="h-44 w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <!-- META -->
            <div class="flex justify-between text-xs text-slate-400 mb-2">
              <span>{{ item.type }}</span>
              <span>{{ item.date }}</span>
            </div>

            <h3 class="font-medium text-base hover:text-red-500 transition">
              {{ item.title }}
            </h3>

            <p class="text-sm text-slate-500 mt-2">
              {{ item.desc }}
            </p>

            <button
              class="text-red-500 text-sm mt-4 relative after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-red-500 hover:after:w-full after:transition-all"
            >
              Read more →
            </button>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>
<script setup>
import { ref, computed } from "vue"

const tabs = ["All", "News", "Events", "Webinar"]
const activeTab = ref("All")

const items = [
  {
    id: 1,
    type: "News",
    title: "Advanced Cancer Treatment Now Available",
    desc: "Latest immunotherapy treatments now offered.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    date: "May 12"
  },
  {
    id: 2,
    type: "Event",
    title: "Free Health Screening Camp",
    desc: "Community outreach health program.",
    image: "https://images.unsplash.com/photo-1559027615-cd2628902d4a",
    date: "May 20"
  },
  {
    id: 3,
    type: "Webinar",
    title: "Mental Health Awareness Session",
    desc: "Learn stress management techniques.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    date: "May 25"
  },
  {
    id: 4,
    type: "News",
    title: "New Pediatric Wing Opens",
    desc: "Modern child healthcare facility.",
    image: "https://images.unsplash.com/photo-1631217b2af1bdf3d2cd3bdb2e2896416662d4f78",
    date: "May 08"
  }
]

const featuredSide = [
  {
    title: "Health Marathon",
    type: "Event",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  },
  {
    title: "AI Diagnostics",
    type: "News",
    image: "https://images.unsplash.com/photo-1631217b2af1bdf3d2cd3bdb2e2896416662d4f78"
  }
]

const filteredItems = computed(() => {
  return activeTab.value === "All"
    ? items
    : items.filter(i => i.type === activeTab.value)
})

const tabClass = (t) =>
  `px-4 py-2 text-sm transition ${
    activeTab.value === t
      ? "text-red-500 border-b-2 border-red-500"
      : "text-slate-500 hover:text-slate-700"
  }`
</script>