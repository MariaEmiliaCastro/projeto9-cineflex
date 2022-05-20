import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function LandingPoster ({id, title, posterUrl, overview, releaseDate}){

    return(
        <>
            <Container>
                <Link to={`/filme/${id}`} >
                    <img src={posterUrl} alt="Imagem do poster do filme"/>
                </Link>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    margin-bottom: 11px;

    img {
        width: 129px;
        height: 193px;
    }
`;