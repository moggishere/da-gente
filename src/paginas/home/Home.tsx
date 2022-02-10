import React, { useEffect } from 'react';
import {Typography, Box, Grid} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Carrossel from '../../components/carrousel/Carrossel'




function Home() {

    /*

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,

        
        history.push("/login")

        }
    }, [token])
            });*/

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                
                <Carrossel />

                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Seja bem vinde e aproveite nosso acervo de livros</Typography>
                    </Box>

                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;