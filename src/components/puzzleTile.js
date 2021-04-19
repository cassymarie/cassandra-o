import React from 'react'
import { GRID_SIZE, TILE_COUNT, BOARD_WIDTH } from '../constants.js'
import { getMatrixPosition, getVisualPosition } from '../helpers/puzzleHelper.js'

function PuzzleTile(props) {
    const { tile, index, width, height } = props

    const { row, col } = getMatrixPosition(index)
    const visualPos = getVisualPosition(row, col, width, height)
    const tileStyle = {
        width: `calc(100%/${GRID_SIZE})`,
        height: `calc(100%/${GRID_SIZE})`,
        translateX: visualPos.x,
        translateY: visualPos.y,
    }

        return(
            <li
                style={{width: tileStyle.width, height:tileStyle.width, transform: `translate3d(${tileStyle.translateX})px, ${tileStyle.translateY}px, 0)`,
                // Is last tile?
                opacity: tile === TILE_COUNT - 1 ? 0 : 1,}} className="tile"
                >
                {`${tile + 1}`}
            </li>

        )

}

export default PuzzleTile