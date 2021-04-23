import React from 'react'
import {  TILE_COUNT, boardSize, GRID_SIZE } from '../constants.js'
import { getMatrixPosition, getVisualPosition } from '../helpers/puzzleHelper.js'
import { Motion, spring } from 'react-motion'
import { ListGroup } from 'react-bootstrap'

function PuzzleTile(props) {
    const { tile, index, width, height, handleTileClick, imgUrl } = props
    const { row, col } = getMatrixPosition(index)
    const visualPos = getVisualPosition(row, col, width, height)
    const tileStyle = {
        width: width,
        height: height,
        translateX: visualPos.x,
        translateY: visualPos.y, 
        backgroundImage: `url(./images/${imgUrl})`,
        backgroundSize: `${boardSize()}px ${height * 2}px`,
        backgroundPosition: `${width * (GRID_SIZE - Math.floor(tile % GRID_SIZE))}px ${height * Math.floor(tile/GRID_SIZE)}px`}
        
    const motionStyle = {
        translateX: spring(visualPos.x),
        translateY: spring(visualPos.y)
    }

        return(
            <Motion style={motionStyle}>
             {({translateX, translateY}) => (
                 <ListGroup.Item style={{ ...tileStyle, transform: `translate3d(${translateX}px, ${translateY}px, 0)`, opacity: tile === TILE_COUNT - 1 ? 0 : 1,}} bsPrefix="tile" onClick={() => handleTileClick(index)}>

                        {/* Position Index: {index} <br></br>  
                        Tile #: {tile}<br></br> 
                        Row:{Math.floor(tile/GRID_SIZE)} -  Col: {Math.floor(tile % GRID_SIZE)}<br></br>
                        {`${width * Math.floor(tile % GRID_SIZE)}px  `} x {`  ${height * Math.floor(tile/GRID_SIZE)}px`}<br></br>
                        x: {tileStyle.translateX} y: {tileStyle.translateY}<br></br> */}
                    
                 </ListGroup.Item>
            )}
            </Motion>
            )
}

export default PuzzleTile