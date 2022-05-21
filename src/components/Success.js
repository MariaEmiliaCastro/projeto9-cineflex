import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Success (state){
    const params = useLocation();
    const navigate = useNavigate();

    const backHome = () => {
        navigate("/", {replace: true})

    }
    return (
        <>
            <Container>
                <Title>Pedido feito <br/> com sucesso!</Title>
                <FilmeSessao>
                    <div className="title">Filme e sessão</div>
                    <div className="subtitle">
                        {params.state[0]}
                        <br/>
                        {params.state[1]} - {params.state[2]}
                    </div>
                </FilmeSessao>
                <FilmeSessao>
                    <div className="title">Ingressos</div>
                    <div className="subtitle">
                        {params.state[3].map((assento,index) => <div key={index}>Assento {assento}</div>)}
                    </div>
                </FilmeSessao>
                <FilmeSessao>
                    <div className="title">Comprador</div>
                    <div className="subtitle">
                        <div>Nome: {params.state[4]}</div>
                        <div>CPF: {params.state[5]}</div>
                    </div>
                </FilmeSessao>
                <Button>
                    <button onClick={backHome}>Voltar pra Home</button>
                </Button>

            </Container>
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

    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';  
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;
    }
`

const Title = styled.div`
    width: 374px;
    height: 110px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;
`

const FilmeSessao = styled.div`
    margin-left: 28px;
    margin-top: 40px;
    .title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 10px;
    }

    .subtitle {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;    

    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        font-family: 'Roboto';  
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;
}
`