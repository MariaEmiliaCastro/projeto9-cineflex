import React from 'react';
import styled from 'styled-components';

export default function Seats ( { id, name, isAvailable } ) {

    const [isChosen, setIsChosen] = React.useState(isAvailable);

    const checkAvailability = (e) => {
        if(isAvailable){
            setIsChosen(true);
        }else{
            console.log("Ocupado")
        }
    }

    return (
        <>
        <Container isAvailable={isAvailable} isChosen={isChosen} onClick={checkAvailability}>
            {name}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.isAvailable ? '#C3CFD9' : '#FBE192'};
    border: 1px solid ${props => props.isAvailable ? '#7B8B99' : '#F7C52B'};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 7px;
    margin-bottom: 18px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
`