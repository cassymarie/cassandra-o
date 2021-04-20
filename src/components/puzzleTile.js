import React from 'react'
import {  TILE_COUNT } from '../constants.js'
import { getMatrixPosition, getVisualPosition } from '../helpers/puzzleHelper.js'
import { Motion, spring } from 'react-motion'
import { ListGroup } from 'react-bootstrap'

function PuzzleTile(props) {
    const { tile, index, width, height, handleTileClick } = props
    const { row, col } = getMatrixPosition(index)
    const visualPos = getVisualPosition(row, col, width, height)

    const tileStyle = {
        width: width,
        height: height,
        translateX: visualPos.x,
        translateY: visualPos.y,
    }

    const motionStyle = {
        translateX: spring(visualPos.x),
        translateY: spring(visualPos.y)
    }

        return(
            <Motion style={motionStyle}>
             {({translateX, translateY}) => (
                 <ListGroup.Item style={{width: tileStyle.width, height:tileStyle.width, transform: `translate3d(${translateX}px, ${translateY}px, 0)`, opacity: tile === TILE_COUNT - 1 ? 0 : 1,}} bsPrefix="tile" onClick={() => handleTileClick(index)} >
                {/* <li style={{width: tileStyle.width, height:tileStyle.width, transform: `translate3d(${translateX}px, ${translateY}px, 0)`, opacity: tile === TILE_COUNT - 1 ? 0 : 1,}} className="tile" onClick={() => handleTileClick(index) }> */}
                    {`${index + 1}`}
                {/* </li> */}
                </ListGroup.Item>
            )}
            </Motion>
            )

}

export default PuzzleTile