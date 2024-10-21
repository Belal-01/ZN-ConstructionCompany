import gsap from "gsap/all"

export const modleAnimation = (itemId,itemContentId,itemWidth)=>{
  gsap.to(itemId,{
    minWidth:itemWidth,
    duration:.4
 
  })
  gsap.to(itemContentId,{
    opacity:1,
    delay:.2
  })
}