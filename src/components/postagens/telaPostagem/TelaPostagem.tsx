import React, { useEffect, useState, ChangeEvent } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, CardMedia } from '@material-ui/core';
import './TelaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca, buscaId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';


function TelaPostagem() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            categoria: '',
            descricao: '',
            impulso: false
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        autor: '',
        sinopse: '',
        preco: '',
        foto: '',
        categoria: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            categoria: tema
        })
    }, [tema])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            categoria: tema
        })

    }

    return (
        <>
            <Box m={2} >
            <Card variant="outlined" className="caixa-produto">

              <CardContent>
                  <CardMedia
                    component="img"
                    image={postagem.foto}
                    alt={postagem.titulo}
                    className="imagem-produto"
                  />

                <Typography color="textSecondary" gutterBottom>
                  Livros
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.autor}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.sinopse}
                </Typography>
                <Typography variant="body1" component="p">
                  R${postagem.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.categoria?.categoria}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </>)
}

export default TelaPostagem;