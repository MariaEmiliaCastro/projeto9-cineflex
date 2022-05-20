import { useParams } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Seats from './Seats';

export default function Session () {
    
    const [data, setData] = React.useState([]);
    const [assentosSelecionados, setAssentosSelecionados] = React.useState([]);

    const params = useParams();
    console.log(params);

    React.useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`)
        .then(response => setData({...response.data}))
    }, [])

    console.log(data);
    const assentos = data.seats;

    return (
        <Container>
            <Titulo>
                <h1>Selecione o horário</h1>
            </Titulo>
            {data.length === 0 ? "CARREGANDO" 
                :
                <>  <div className='seats'>
                        {assentos.map(({ id, name, isAvailable }, index) => 
                            <Seats id={id} name={name} isAvailable={isAvailable} key={index}/>
                        )}                    
                    </div>      

                    <Formulario>
                        {assentosSelecionados}
                    </Formulario>
                    <Footer>
                        <div className="poster-mini">
                            <img src={data.movie.posterURL} alt="Poster do filme" />
                        </div>
                        <div className="titulo">
                            {data.movie.title}
                            <br/>
                            {data.day.weekday} - {data.name}
                        </div>
                    </Footer>                
                </>

            }          
        </Container>
    )
}

const Container = styled.div`
    * {
        box-sizing: border-box;
    }

    background-color: white;
    margin-top: 67px;
    display: flex;
    flex-direction: column;

    .seats {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 24px;
        margin-right: 24px;
    }
`

const Titulo = styled.div`
    height: 110px;
    display: flex;
    justify-content: center;
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

const Footer = styled.div`
    background-color: #C3CFD9;
    height: 117px;
    width: 100%;
    padding-left: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;


    .poster-mini {
        width: 64px;
        height: 89px;
        margin-right: 14px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        
    }

    .titulo {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        color: #293845;
        word-wrap: break-word;
        
    }

    .poster-mini img {
        width: 48px;
        height: 72px;
    }
`

const Formulario = styled.div`
`