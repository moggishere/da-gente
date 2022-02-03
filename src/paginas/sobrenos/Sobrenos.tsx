import React, { } from 'react'
import { Typography, Box, Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Sobrenos.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Sobrenos() {
    return (
        <>
            <Grid>
                <Grid xs={12}  >
                    <Grid container justifyContent="center">
                        <Grid item xs={6}>
                            <Box >
                                <img src="" alt="logo estante da gente" style={{ width: "100vh", height: "100vh" }} />
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    O que é?
                                </Typography>
                                </Box>
                                <Box paddingBottom={2} >
                                <Typography className='espaco-letras'>
                                  
                                    Inspirados nas dificuldades passadas por autores nacionais na publicação de seus textos,
                                    Criamos uma plataforma marketplace com o objetivo de conectar autores e seus públicos.
                                  
                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    Como?
                                </Typography>
                                </Box>
                                <Typography className='espaco-letras'>

                                    Autores serão capazes de usar nossa plataforma para a publicação de livros, dentro dela eles terão completo controle na circulação dos textos e total autonomia para precifica-los como bem entenderem.

                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingRight={7} paddingLeft={7}>
                                <Box paddingBottom={2}>
                                <Typography variant='h3' component='h3' align='center'>
                                    Para Quem?
                                </Typography>
                                </Box>
                                <Box paddingBottom={14} >
                                <Typography className='espaco-letras'>

                                    A leitura é para todes: adultos, crianças, idosos.

                                </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className='box-texto' paddingLeft={7} paddingRight={7}>
                                <Box paddingBottom={2} >
                                <Typography variant='h3' component='h3' align='center'>
                                    Objetivos
                                </Typography>
                                </Box>
                                <Typography className='espaco-letras'>

                                    Estímulo à leitura de textos vindo de origens diversas.
                                    Facilidade na transação entre escritor e leitor.
                                    Incerção de autores de diversas camadas da sociedade.

                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item xs={6} >
                        <Box paddingBottom={7} >
                            <Typography variant='h2' component='h2' align='center' className='box-texto'>

                                Quem faz a Estante da Gente?

                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container xs={12} justifyContent='center' alignItems='center' >
                <Box justifyContent="center" alignItems="center">
                    <Box  justifyContent="center" alignItems="center" >
                            <img className='box-fotos' src="" alt="Dev Ah Ro " />
                            </Box>
                            <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Ah Ro Yoon 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Estudante 
                                </Typography>
                            </Box>
                        <Box alignItems="center" justifyContent="center"  className='box-icones' >
                            <a href=" https://github.com/moggishere" target="_blank">
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/ary-yoon-31909613b" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60 }} />

                            </a>
                        </Box>
                    
                    </Box>
                    <Box>
                    <Box justifyContent="center" alignItems="center">

                        <img className='box-fotos' src="" alt="Dev Jeferson" />

                    </Box>

                    <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Jeferson Cambui
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>

                                    A

                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones' >


                            <a href="https://github.com/Jeecambui" target="_blank">
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/jefersoncambui/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60 }} />

                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>

                        <img className='box-fotos' src="" alt="Dev Taís" />

                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>

                                    Taís Ribeiro

                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>

                                    Analista de Sistemas

                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>


                            <a href="https://github.com/TaisRibeiroAReis " target="_blank">
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://www.linkedin.com/in/ta%C3%ADs-ribeiro-358772196" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60 }} />

                            </a>
                        </Box>
                    </Box>
                    
                    <Box>
                        <Box>

                        <img className='box-fotos' src="" alt="Dev Abner" />

                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>

                                  Abner Borges

                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedora Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>

                                    Analista de Sistemas

                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>


                            <a href="https://github.com/Abner013" target="_blank">
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/abner-borges-1b227a17a" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60 }} />

                            </a>
                        </Box>
                    </Box>
                    <Box>
                        <Box>

                        <img className='box-fotos' src="" alt="Dev Mirella" />

                        </Box>

                        <Box >
                                <Typography variant='h5' component='h5' align='center'>
                                    Mirella Mirthes
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>
                                    Desenvolvedor Full Stack 
                                </Typography>
                                <Typography variant='h6' component='h6' align='center'>

                                    Operador 

                                </Typography>
                            </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" className='box-icones'>


                            <a href="https://github.com/mirellamm" target="_blank">
                                <GitHubIcon style={{ fontSize: 50 }} />
                            </a>
                            <a href=" https://www.linkedin.com/in/mirella-mirthes-61186720b" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60 }} />

                            </a>
                        </Box>
                    </Box>
                


                </Grid>
            </Grid>
        </>
    );
}

export default Sobrenos;