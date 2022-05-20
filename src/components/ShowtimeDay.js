import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ShowtimeDay ({ id, date, showtime, weekday }) {
    console.log(showtime)
    return (
        <>
        <Container>
            <div className='horarios'>
                <h2>{weekday} - {date}</h2>
            </div>
            <DisplayButtons>
                {showtime.map(({name, id}, index) => 
                    <Link to={`/sessao/${id}`} style={{ textDecoration: 'none' }}>
                        <button key={index}>{name}</button>
                    </Link>    
                )}
            </DisplayButtons>        

        </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    

    .horarios {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        margin-bottom: 22px;
        display: flex;
        text-align: start;

    }


`

const DisplayButtons = styled.div`

    display: flex;

    button {
        width: 82px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin-bottom: 23px;
        margin-right: 9px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        color: white;
        
    }
`