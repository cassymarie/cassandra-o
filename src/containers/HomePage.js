import React from 'react'
import { Container } from 'react-bootstrap'
import Board from '../components/board.js'
// import { updateURLParameter } from "../helpers/puzzleHelper.js"

function HomePage () {
// const [imgUrl, setImgUrl] = useState("")
// // const myImages = ['flatirons.jpeg','n_cascades.jpeg','seattle.jpeg','yellowstone.jpeg','cherry_blossoms.jpeg']

// // const randomImage = myImages[Math.floor(Math.random() * myImages.length)]

// useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search)
//     if(urlParams.has("img")){
//         setImgUrl(urlParams.get("img"))
//     }
// }, [])

// const handleImageChange = (e) => {
//     setImgUrl(e.target.value)
//     // window.history.replaceState("","", updateURLParameter(window.location.href, "img", e.target.value))
// }

        return(
            <Container bsPrefix="aboutMe">
                <Board/>
            </Container>
        )
}

export default HomePage