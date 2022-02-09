import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import { Box } from "@material-ui/core"
import './Carrossel.css'

function Carrossel() {
    const [items, setstate] = useState([])
    return (

<Box className='pgcarousel'>
    <Carousel >
        <Carousel.Item interval={3000}>
            <img 
            className="imgcarousel1" 
            src="https://img.travessa.com.br/vitrine/Semana22_FEV-2022_1160.jpg" 
            alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel2"
            src="http://livrariasparlenda.com.br/wp-content/uploads/2014/07/Banner-principal.jpg"
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel3"
            src="https://inspireleitura.com.br/wp-content/uploads/2021/09/Face-1-1.png"
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
            <img
            className="imgcarousel3"
            src="https://altabooks.com.br/wp-content/uploads/2022/01/BANNER_SITE_Os-sete-de-chicago-1-1536x512.jpg"
            alt="Fourth slide"
            />
        </Carousel.Item>
    </Carousel>

</Box>

    )
}

export default Carrossel;