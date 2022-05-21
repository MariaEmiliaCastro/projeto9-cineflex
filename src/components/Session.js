import { useParams, Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Seats from './Seats';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';

export default function Session () {
    
    const [data, setData] = React.useState([]);
    const [assentosSelecionados, setAssentosSelecionados] = React.useState([]);

    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [sucesso, setSucesso] = React.useState(false);
    const history = useNavigate();

    const params = useParams();

    React.useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${params.idSessao}/seats`)
        .then(response => setData({...response.data}))
    }, [])

    const assentos = data.seats;
    const handleForm = (event) => {
        event.preventDefault();
        console.log(nome, cpf);

        const payload = {
            ids: assentosSelecionados,
            name: nome,
            cpf: cpf
        }

        console.log(payload);
        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", payload)
        .then(response => {
            console.log(response)
            setSucesso(true);            
        })
        .catch(err => console.log(err));
    }

    return (
        <Container>
            <Titulo>
                <h1>Selecione o horário</h1>
            </Titulo>
            {data.length === 0 ? "CARREGANDO" 
                :
                <>  <div className='seats'>
                        {assentos.map(({ id, name, isAvailable }, index) => 
                            <Seats id={id} name={name} isAvailable={isAvailable} assentosSelecionados={assentosSelecionados} setAssentosSelecionados={setAssentosSelecionados} key={index}/>
                        )}                    
                    </div>      
                    <div >
                        <div className='legenda'>
                            <div className='bolinha-legenda' style={{backgroundColor : "#8DD7CF", border: "1px solid #1AAE9E"}}></div>
                            <div className='bolinha-legenda' style={{backgroundColor : "#C3CFD9", border: "1px solid #7B8B99"}}></div>
                            <div className='bolinha-legenda' style={{backgroundColor : "#FBE192", border: "1px solid #F7C52B"}}></div>                        
                        </div >
                        <div className='legenda-nome'>
                            <span>Selecionado</span>
                            <span>Disponível</span>
                            <span>Indisponível</span>
                        </div>
                        
                        
                        
                    </div>
                    <Formulario>
                        <form onSubmit={handleForm}>
                            <div>
                                <label>Nome do Comprador:</label>
                                <br/>
                                <input type="text" value={nome} placeholder='Digite seu nome...' onChange={(e) => setNome(e.target.value)}/>
                                <br/>
                                <label>CPF do Comprador:</label>
                                <br/>
                                <input type="text" value={cpf} placeholder='Digite seu CPF...' onChange={(e) => setCpf(e.target.value)}/>
                                <br/>
                            </div>
                            <div className='btn'>
                                <button type="submit">Reservar assento(s)</button>
                            </div>                           
                        </form>
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
                    {sucesso ? <Navigate to="/sucesso" replace state={[data.movie.title, data.day.weekday, data.name, assentosSelecionados, nome, cpf]}/> : ""}                
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

    .legenda {
        display:flex;
        margin-left: 78px;
        margin-right: 80px;
        justify-content: space-between;
    }

    .legenda-nome {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        margin-left: 58px;
        margin-right: 58px;
        display: flex;
        justify-content: space-between;
    }

    .bolinha-legenda {
        width: 26px;
        height: 26px;
        border-radius: 12px;
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
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;


    input {
        width: 309px;
        height: 50px;
        padding-left: 18px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }
    
    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

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