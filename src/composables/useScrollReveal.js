import { onMounted, nextTick } from "vue"

export function useScrollReveal() {

  onMounted(async () => {

    await nextTick()

    const elements = document.querySelectorAll(".reveal")

    console.log("FOUND REVEAL ELEMENTS:", elements.length)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
      }
    )

    elements.forEach((el) => {
      observer.observe(el)
    })
  })
}