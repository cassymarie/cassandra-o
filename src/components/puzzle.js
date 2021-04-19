
import PuzzleTile from '../components/puzzleTile.js'

function Puzzle(){

    // const [tiles, tileLocation] = useState([...Array(8).keys()])
    
        return(
            <>
            <ul className="board">

                <PuzzleTile />
            </ul>
            </>
        )
}

export default Puzzle