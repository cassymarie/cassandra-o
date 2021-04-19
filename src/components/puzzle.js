import React, { useState } from 'react'
import PuzzleTile from '../components/puzzleTile.js'
import { TILE_COUNT, GRID_SIZE, BOARD_WIDTH } from '../constants.js'
// import { Container } from 'react-bootstrap'
import '../styles/Puzzle.css'

function Puzzle(){
    console.log(`BoardWith: ${BOARD_WIDTH}, GridSize: ${GRID_SIZE}, tileCount: ${TILE_COUNT}`)
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()])
    const pieceSize = Math.round(BOARD_WIDTH/GRID_SIZE)
    const style = { width: BOARD_WIDTH, height: (pieceSize * 2)}
    
        return(
            <>
            <ul sytle={style} className="board">
                {tiles.map((tile, index) => (
                    <PuzzleTile key={tile} index={index} tile={tile} width={pieceSize} height={pieceSize}/>
                ))}
            </ul>
            </>
        )
}

export default Puzzle