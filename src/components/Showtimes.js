import { useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import React from "react";
import ShowtimeDay from "./ShowtimeDay";

export default function Showtimes () {
    const { idFilme } = useParams();
    const [showtime, setShowtime] = React.useState([]);

    React.useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        .then(response => {
            setShowtime({...response.data})
        })
    }, [])
    const horarios = showtime.days
    return (
        <>
        {showtime.length === 0 ? "CARREGANDO" :
            <Container>
                <Titulo>
                    <h1>Selecione o horário</h1>
                </Titulo>
                <Horarios>
                    {horarios.map(({ date, id, showtimes, weekday }, index) => <ShowtimeDay date={date} id={id} showtime={showtimes} weekday={weekday} key={index} />)}
                </Horarios>
                <Footer>
                    <div className="poster-mini">
                        <img src={showtime.posterURL} alt="Poster do filme"/>
                    </div>
                    <div className="titulo">
                        {showtime.title}
                    </div>
                </Footer>
            </Container>
        }
        </>
        
        
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
`

const Horarios = styled.div`
    margin-left: 24px;
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
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        word-wrap: break-word;
        
    }

    .poster-mini img {
        width: 48px;
        height: 72px;
    }
`