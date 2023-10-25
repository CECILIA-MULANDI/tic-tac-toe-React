import React from 'react'
import "../App.css"

export default function Tiles({className,value,onClick,player}) {
  let hoverClass = null;
  if(value==null && player!=null){
    hoverClass= `${player.toLowerCase()}-hover`
  }
  return (
    <div onClick={onClick}className={` tile ${className} ${hoverClass}` }>{value}</div>
  )
}
