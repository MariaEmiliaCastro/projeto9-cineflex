import styled from 'styled-components';

export default function Header(){

    return (
        <>
            <Container>
                CINEFLEX
            </Container>
        </>
    );
}

const Container = styled.div`
    background-color: #C3CFD9;
    height: 67px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`;