import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import LandingPoster from './LandingPoster';

export default function Landing(){

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        .then(response => setMovies([...response.data]))
    }, []);

    return (
        <>
            <Container>
                <Titulo>
                    <h1>Selecione o filme</h1>
                </Titulo>
                {movies.length === 0 ? "CARREGANDO..." :
                    <PosterDisplay>
                        {movies.map(({ id, title, posterURL, overview, releaseDate }, index) => <LandingPoster id={id} title={title} posterUrl={posterURL} overview={overview} releaseDate={releaseDate} key={index}/>)}
                    </PosterDisplay>                 
                }                
              
            </Container>
        </>
    );
}

const Container = styled.div`
    background-color: white;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

const PosterDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const Titulo = styled.div`
    height: 110px;
    display: flex;
    align-items: center;
    text-align: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        line-height: 28px;
        font-weight: 400;
        letter-spacing: 0.04em;
    }

`