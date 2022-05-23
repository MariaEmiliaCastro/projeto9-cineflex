import React from 'react';
import styled from 'styled-components';

export default function Seats ( { id, name, assentosSelecionados, setAssentosSelecionados, isAvailable, cor }) {

    const [color, setColor] = React.useState(['#C3CFD9']);
    const [border, setBorder] = React.useState(['#7B8B99']);
    const [selected, setSelected] = React.useState(false);
    const checkAvailability = (e) => {
        if(isAvailable){
            if(!selected){
                setAssentosSelecionados(oldNames => [...oldNames, Number(name)]);
                setColor('#8DD7CF');
                setBorder('#1AAE9E');
                setSelected(true);
            }else{
                assentosSelecionados.pop();
                setColor('#C3CFD9');
                setBorder('#7B8B99')
                setSelected(false);
            }


        }else{
            alert("Esse assento não está disponível");
        }
    }

    return (
        <>
        <Container isAvailable={isAvailable} color={color} border={border} onClick={checkAvailability}>
            {name}
        </Container>
        </>
    )
}

const Container = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${props => props.isAvailable ? props.color : '#FBE192'};
    border: 1px solid ${props => props.isAvailable ? props.border : '#F7C52B'};
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