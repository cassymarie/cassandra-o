import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Board from '../components/board.js'
import { updateURLParameter } from "../helpers/puzzleHelper.js"

function HomePage () {
const [imgUrl, setImgUrl] = useState("")

useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if(urlParams.has("img")){
        setImgUrl(urlParams.get("img"))
    }
}, [])

const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("","", updateURLParameter(window.location.href, "img", e.target.value))
}

        return(
            <Container bsPrefix="aboutMe">
                <Board imgUrl={imgUrl}/>
                <input value={imgUrl} onChange={handleImageChange} />
            </Container>
        )
}

export default HomePage