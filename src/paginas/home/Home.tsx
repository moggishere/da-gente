import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalTema from '../../components/temas/modalTema/ModalTema';

import Carrossel from '../../components/carrousel/Carrossel'


function Home() {

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
            });
            history.push("/login")

        }
    }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa mensagem-inicial'>
                
                <Carrossel />

                
                <Grid alignItems="center" item xs={12}>
                    {/* <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Produtos</Button> ESQUEMA ANTIGO
                        </Link>
                    </Box> */}
                </Grid>
                {/* <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid> */}
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Produtos</Button>
                        </Link>
                        <Box marginRight={1}>
                            <ModalTema />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;