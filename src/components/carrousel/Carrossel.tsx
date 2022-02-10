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
            className="imgcarouse11" 
            src="https://altabooks.com.br/wp-content/uploads/2022/01/BANNER_SITE_Os-sete-de-chicago-1-1536x512.jpg" 
            alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://altabooks.com.br/wp-content/uploads/2022/01/BANNER_SITE_Os-sete-de-chicago-1-1536x512.jpg"
            alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://altabooks.com.br/wp-content/uploads/2022/01/BANNER_SITE_Os-sete-de-chicago-1-1536x512.jpg"
            alt="Third slide"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel1"
            src="https://altabooks.com.br/wp-content/uploads/2022/01/BANNER_SITE_Os-sete-de-chicago-1-1536x512.jpg"
            alt="Fourth slide"/>
        </Carousel.Item>
    </Carousel>

</Box>

    )
}

export default Carrossel;