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