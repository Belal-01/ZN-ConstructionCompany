export const dynamicWidth = (pageWidth,componentWidth)=>{
const designPageWIdth = 1900;
const urCostumComponentWidth =parseInt((pageWidth*componentWidth)/designPageWIdth);
return urCostumComponentWidth;
}

export const dynamicHieght= (pageHeight,componentHeight)=>{
  const designPageHeight = 958;
  const urCostumComponentHeight=parseInt((pageHeight*componentHeight)/designPageHeight);
  return urCostumComponentHeight;
  }

  export const floorSlides = [{
    img:'/imgs/floor-1.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },{
    img:'/imgs/floor-2.png',
    shade:'DARK',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/floor-3.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/floor-4.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/floor-5.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/floor-6.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/floor-6.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
]

export const wallsSlides = [
  {
    img:'/imgs/walls-1.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/walls-2.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/walls-3.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },
  {
    img:'/imgs/walls-4.png',
    shade:'LIGHT',
    type:'BUTTERSCOTCH OAK'

  },

]
export const sinksSlides = [
  {
    img:'/imgs/sinks-1.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/sinks-2.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/sinks-3.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/sinks-4.png',
    shade:'',
    type:''

  },
]
export const faucetsSlides = [
  {
    img:'/imgs/faucets-1.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/faucets-2.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/faucets-3.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/faucets-4.png',
    shade:'',
    type:''

  },
]
export const kitchenSlides= [
  {
    img:'/imgs/kitchen-1.png',
    shade:'',
    type:''

  }, 
  {
    img:'/imgs/kitchen-2.png',
    shade:'',
    type:''

  }, 
  {
    img:'/imgs/kitchen-3.png',
    shade:'',
    type:''

  }, 
  {
    img:'/imgs/kitchen-4.png',
    shade:'',
    type:''

  }, 
]

export const interiorCladdingSections = [
  {
    title:'FLOORS',
    slides:floorSlides
  },
  {
    title:'WALLS',
    slides:wallsSlides 
  },
  {
    title:'SINKS',
    slides:sinksSlides
  },
  {
    title:'FAUCETS',
    slides:faucetsSlides
  },
  {
    title:'KITCHENS',
    slides:kitchenSlides
  },
 
]

export const shrubSlides = [
  {
    img:'/imgs/shrubs-1.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/shrubs-2.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/shrubs-3.png',
    shade:'',
    type:''

  },
  {
    img:'/imgs/shrubs-4.png',
    shade:'',
    type:''

  },


]
export const pavmentSlides = [
  {
    img:'/imgs/pavement-1.png',
    shade:'',
    type:''
  },
  {
    img:'/imgs/pavement-2.png',
    shade:'',
    type:''
  },
  {
    img:'/imgs/pavement-3.png',
    shade:'',
    type:''
  },
  {
    img:'/imgs/pavement-4.png',
    shade:'',
    type:''
  },
]
export const landscapingdepartment = [
  {
    title:'SHRUBS',
    slides:shrubSlides
  },
  {
    title:'PAVEMENTS',
    slides:pavmentSlides
  },
]

export const interiorSlides = [
  {
    img:'/imgs/interior-1.png'
  },
  {
    img:'/imgs/interior-2.png'
  },
  {
    img:'/imgs/interior-3.png'
  },
  {
    img:'/imgs/interior-4.png'
  },

  {
    img:'/imgs/interior-5.png'
  },
  {
    img:'/imgs/interior-6.png'
  },
]