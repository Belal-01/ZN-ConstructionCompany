import { create } from "zustand"
import { persist } from "zustand/middleware"


const store = (set)=>({
  darkMood:false,
  setDarkMood:(state)=>set(()=>({darkMood:state})),
  userToken:null,
  setUserToken:(token)=>set(()=>({userToken:token})),
  userEmail:null,
  setUserEmail:(email)=>set(()=>({userEmail:email})),

})

export const useStore = create(persist(store))