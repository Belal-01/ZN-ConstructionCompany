import { create } from "zustand"


const store = (set)=>({
  darkMood:false,
  setDarkMood:(state)=>set(()=>({darkMood:state}))
})

export const useStore = create(store)