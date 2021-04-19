import React from 'react'
import {  TILE_COUNT } from '../constants.js'
import { getMatrixPosition, getVisualPosition } from '../helpers/puzzleHelper.js'

function PuzzleTile(props) {
    const { tile, index, width, height } = props

    const { row, col } = getMatrixPosition(index)
    const visualPos = getVisualPosition(row, col, width, height)

    const tileStyle = {
        width: width,
        height: height,
        translateX: visualPos.x,
        translateY: visualPos.y,
    }

    console.log('style: ', tileStyle)

        return(
            <li style={{width: tileStyle.width, height:tileStyle.width, transform: `translate3d(${tileStyle.translateX}px, ${tileStyle.translateY}px, 0)`, opacity: tile === TILE_COUNT - 1 ? 0 : 1,}} className="tile">
                {`${index + 1}`}
            </li>
            )

}

export default PuzzleTile