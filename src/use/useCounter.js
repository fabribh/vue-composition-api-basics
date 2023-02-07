import { reactive, computed, watch, onMounted, nextTick } from "vue";

const counterData = reactive({
  count: 0,
  title: "My Counter"
})
export function useCounter() {

  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even"
    return "odd"
  })
 
  watch(
    () => counterData.count,
    (newValue) => {
      if (newValue == 20) return alert("Yeah! You did it!!!")
    }
  )

  const increaseCounter = (amount) => {
    counterData.count += amount
    nextTick(() => {
      console.log("Doing something when counter has updated in the dom")
    })
  }

  const decreaseCounter = (amount) => {
    counterData.count -= amount
  }

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
