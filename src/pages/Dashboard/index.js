import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {
        async function loadAgendamentos() {
            const user_id = localStorage.getItem('user'); //PEGAR ID DO USUARIO
            const response = await api.get('/agendamentos', { //PASSAR ID VIA HEADERS
                headers: { user_id }
            });
            setAgendamentos(response.data);
        }

        loadAgendamentos();
    }, []);

    return (
        <>
            <ul className="agendamentos-list">
                {agendamentos.map(agendamento =>(
                  <li key={agendamento._id}>
                      <header style={{ backgroundImage: `url(${agendamento.thumbnail_url})`}} />
                      <strong>{agendamento.titulo}</strong>
                      <span>{agendamento.data ? `Agendado para ${agendamento.data}` : 'EM ABERTO'}</span>

                  </li>  
                ))}
            </ul>

            <Link to="/new">
                <button className="btn">Cadastrar novo agendamento</button>
            </Link>
        </>
    );
}