import React from 'react'
import Tiles from './Tiles'
import "../App.css"
import Strike from './Strike'
export default function TheGrid({tiles,onTileClick,player,strike}) {
  return (
    <div>
      <div class="container text-white  text-center gridsystem " style={{ margin: '0', padding: '0' }}>
    <div class="row">
      <div class="col-sm  " style={{ margin: '0', padding: '0' }}>
      <Tiles player={player} onClick={()=>onTileClick(0)} value={tiles[0]} className='right-border bottom-border'/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player} onClick={()=>onTileClick(1)} value={tiles[1]} className='right-border bottom-border'/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player} onClick={()=>onTileClick(2)} value={tiles[2]} className='bottom-border'/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player}  onClick={()=>onTileClick(3)} value={tiles[3]} className='right-border bottom-border'/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player}  onClick={()=>onTileClick(4)} value={tiles[4]} className='right-border bottom-border'/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player}  onClick={()=>onTileClick(5)} value={tiles[5]} className='bottom-border'/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles  player={player} onClick={()=>onTileClick(6)} value={tiles[6]} className='right-border '/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player} onClick={()=>onTileClick(7)} value={tiles[7]} className='right-border '/>
      </div>
      <div class="col-sm" style={{ margin: '0', padding: '0' }}>
      <Tiles player={player} onClick={()=>onTileClick(8)} value={tiles[8]}/>
      </div>
    </div>
  </div>
  <Strike strike={strike}/>
     
    </div>
  )
}
