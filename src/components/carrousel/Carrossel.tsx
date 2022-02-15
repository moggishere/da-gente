import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import { Box } from "@material-ui/core"
import './Carrossel.css'

function Carrossel() {
    const [items, setstate] = useState([])
    return (

<Box className='pgcarousel'>
    <Carousel fade>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://i.imgur.com/kA3rpI0.png"
            alt="Primeiro Slide"/>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://i.imgur.com/Fnn8VYy.png"
            alt="Segundo Slide"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://i.imgur.com/1mhBoeL.png"
            alt="Terceiro Slide" />
        </Carousel.Item>
    </Carousel>

</Box>

    )
}

export default Carrossel;