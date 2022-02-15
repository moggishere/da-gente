import {Typography, Box, Grid} from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

import Carrossel from '../../components/carrousel/Carrossel'


function Home() {

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