import React from 'react'
import { useState,useEffect} from 'react'
import TheGrid from './Grid'
import "../App.css"
import GameState from './GameState'
import GameOver from './GameOver'
import Reset from './Reset'
import gameOverSound from "../Sounds/game-over.wav"
import clickSound from "../Sounds/click-sound.wav"

const gameOverSoundAsset= new Audio(gameOverSound)
gameOverSoundAsset.volume =0.2
const clickSoundAsset = new Audio(clickSound)
clickSoundAsset.volume=0.5
const PLAYER_X="X"
const PLAYER_O="O"

const winningCombo=[
  // rows
  {combo:[0,1,2], strike:"strike-row-1"},
  {combo:[3,4,5], strike:"strike-row-2"},
  {combo:[6,7,8], strike:"strike-row-3"},
  // columns
  {combo:[0,3,6], strike:"strike-col-1"},
  {combo:[1,4,7], strike:"strike-col-2"},
  {combo:[2,5,8], strike:"strike-col-3"},
  // diaagonals
  {combo:[0,4,8], strike:"strike-diagonal-1"},
  {combo:[2,4,6], strike:"strike-diagonal-2"}
]
function checkWinner(tiles,setStrikeClass,setGameState){
  for( const { combo,strike} of winningCombo){
    const tileValue1=tiles[combo[0]]
    const tileValue2=tiles[combo[1]]
    const tileValue3=tiles[combo[2]]


    if(tileValue1 !=null && tileValue1 === tileValue2 && tileValue1 ===tileValue3){
      setStrikeClass(strike)
      if(tileValue1 ===   PLAYER_X){
        setGameState(GameState.playerXWins)
      }
      else{
        setGameState(GameState.playerOWins)
      }
      return;
    }
  }
  const areAllTilesFilled= tiles.every((tile)=> tile != null);
  if(areAllTilesFilled){
    setGameState(GameState.draw)
  }
}
export default function Board() {
  const [tiles,setTiles]=useState(Array(9).fill(null))
  const [player,setPlayerTurn]=useState(PLAYER_X)
  const [strike,setStrikeClass]=useState()
  const [gameState,setGameState]=useState(GameState.inProgress)
  const handleTileClick=(index)=>{
    if(gameState !== GameState.inProgress){
      return;
    }
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

  const handleReset=()=>{
    setGameState(GameState.inProgress)
    setTiles(Array(9).fill(null))
    setPlayerTurn(PLAYER_X)
    setStrikeClass(null)

  }

  useEffect(()=>{
    checkWinner(tiles,setStrikeClass,setGameState);
  },[tiles])

  useEffect (()=>{
    if(tiles.some((tile=>tile!==null))){
      clickSoundAsset.play()
    }
  },[tiles])
  useEffect (()=>{
   if(gameState !== GameState.inProgress){
    gameOverSoundAsset.play()
   }
  },[gameState])
  return (
    <div className='board container text-white text-center  p-5'>
        <h1>Tic-tac-toe</h1>
        <TheGrid player={player}tiles={tiles} onTileClick={handleTileClick} strike={strike}/>
       <GameOver gameState={gameState}/>
       <Reset gameState={gameState} onReset={handleReset}/>
        </div>

  )
}
