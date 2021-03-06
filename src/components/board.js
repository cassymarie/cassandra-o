import React, { useState } from 'react'
import { Button, ListGroup, Container } from 'react-bootstrap'
import PuzzleTile from './puzzleTile.js'
import { TILE_COUNT, GRID_SIZE, BOARD_WIDTH } from '../constants.js'
import { shuffle, canSwap, swap, isSolved } from '../helpers/puzzleHelper.js'


import '../styles/Puzzle.css'

function Board(){
    // console.log(`BoardWith: ${BOARD_WIDTH}, GridSize: ${GRID_SIZE}, tileCount: ${TILE_COUNT}`)
    const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()])
    const [isStarted, setIsStarted] = useState(false)
    // const [imgUrl, setImgUrl] = useState("flatirons.jpeg")

    const pieceSize = Math.round(BOARD_WIDTH/GRID_SIZE)
    const style = { width: BOARD_WIDTH, height: (pieceSize * 2)}

    const myImages = ['flatirons.jpeg','n_cascades.jpeg','seattle.jpeg','yellowstone.jpeg','cherry_blossoms.jpeg']

    const randomImage = myImages[Math.floor(Math.random() * myImages.length)]

    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles)
        setTiles(shuffledTiles)
    }

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

        return(
            <>
            { hasWon && isStarted && <div>🙌 🙌 Puzzle Solved 🙌 🙌</div>}
            {!isStarted ? <Button onClick={() => handleStartClick()}>Start Game</Button> : <Button onClick={() => shuffleTiles()}>Restart</Button>}
            
            <Container>
            <ListGroup style={style} bsPrefix="board">
                {tiles.map((tile, index) => (
                    <PuzzleTile 
                        key={tile} index={index} tile={tile} width={pieceSize} height={pieceSize} imgUrl={randomImage} handleTileClick={handleTileClick}/>
                ))}
            </ListGroup>
            </Container >
            </>
        )
}

export default Board