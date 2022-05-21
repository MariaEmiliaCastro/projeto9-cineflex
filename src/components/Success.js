import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Success (state){
    const params = useLocation();
    console.log("OI")
    console.log(params);
    return (
        <>
            <Container>
                <Title>Pedido feito <br/> com sucesso!</Title>
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