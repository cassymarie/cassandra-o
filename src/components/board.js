import React, { useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import PuzzleTile from './puzzleTile.js'
import { TILE_COUNT, GRID_SIZE, boardSize } from '../constants.js'
import { shuffle, canSwap, swap, isSolved } from '../helpers/puzzleHelper.js'
// import '../styles/Puzzle.scss'

function Board(){
    // console.log(`BoardWith: ${BOARD_WIDTH}, GridSize: ${GRID_SIZE}, tileCount: ${TILE_COUNT}`)
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()])
    const [isStarted, setIsStarted] = useState(false)
    const [imgUrl, setImgUrl] = useState("flatirons.jpeg")

    const pieceSize = Math.round(boardSize()/GRID_SIZE)
    const style = { width: boardSize(), height: (pieceSize * 2)}

    const myImages = ['flatirons.jpeg','seattle.jpeg','yellowstone.jpeg']

    const puzzleImage = () => {
       let img = myImages[Math.floor(Math.random() * myImages.length)]
        setImgUrl(img)
    }

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        puzzleImage()
        setTiles(shuffledTiles)
    }

    console.log(boardSize())
    console.log(window.visualViewport.width)

    const swapTiles = (tileIndex) => {
        if(canSwap(tileIndex, tiles.indexOf(tiles.length - 1))){
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1))
            setTiles(swappedTiles)
        }
    }

    const hasWon = isSolved(tiles)

    const handleTileClick = (index) => { swapTiles(index) }
    
    const handleStartClick = () => {
        shuffleTiles()
        setIsStarted(true)
    }

    const solvePuzzle = () => {
        setTiles([...Array(TILE_COUNT).keys()])
    }

        return(
            <>
            { hasWon && isStarted && <div>🙌 🙌 Puzzle Solved 🙌 🙌</div>}
            {!isStarted ? <Button onClick={() => handleStartClick()}>Start Game</Button> : <Button onClick={() => shuffleTiles()}>Restart</Button>}
            <Button onClick={() => solvePuzzle()}>Solve</Button>

            <ListGroup style={style}  bsPrefix="board">
                {tiles.map((tile, index) => (
                    <PuzzleTile 
                        key={tile} index={index} tile={tile} width={pieceSize} height={pieceSize} imgUrl={imgUrl} handleTileClick={handleTileClick}/>
                ))}
            </ListGroup>
            </>
        )
}

export default Board