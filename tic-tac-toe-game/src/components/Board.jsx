import React from 'react'
import { useState,useEffect} from 'react'
import TheGrid from './Grid'
import "../App.css"
import Strike from './Strike'
const PLAYER_X="X"
const PLAYER_O="O"
export default function Board() {
  const [tiles,setTiles]=useState(Array(9).fill(null))
  const [player,setPlayerTurn]=useState(PLAYER_X)
  const [strike,setStrikeClass]=useState("strike-row-1")
  const handleTileClick=(index)=>{
    if(tiles[index]!==null){
      return;
    }
    // make a copy of the tiles array 
   const newTiles = [...tiles];
   newTiles[index]=player;
   setTiles(newTiles)
   if (player===PLAYER_X){
    setPlayerTurn(PLAYER_O)
   }
   else{
    setPlayerTurn(PLAYER_X)
   }
   
  }
  function checkWinner(){
    console.log("check winner")
  }
  useEffect(()=>{
    checkWinner();
  },[tiles])
  return (
    <div className='board container text-white text-center  p-5'>
        <h1>Tic-tac-toe</h1>
        <TheGrid player={player}tiles={tiles} onTileClick={handleTileClick} strike={strike}/>
       
        </div>

  )
}
