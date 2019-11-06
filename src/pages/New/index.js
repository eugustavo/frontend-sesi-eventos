import React, { useState, useMemo } from 'react';
//import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [user, setUser] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();

        //const data = new FormData();
        //const user_id = localStorage.getItem('user');

        //data.append('thumbnail', thumbnail);
        //data.append('titulo', titulo);
        //data.append('data', data);
        //data.append('user', user);

        //await api.post('/agendamento', data, {
        //    headers: { user_id }
        //});

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={ thumbnail ? 'has-thumbnail': ''}
            >
                <input type="file" onChange={ event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Selecione a imagem"/>
            </label>

            <label htmlFor="titulo"> TITULO *</label>
            <input
                id="titulo"
                placeholder="Título do Agendamento"
                value={titulo}
                onChange={event => setTitulo(event.target.value)}
            />

            <label htmlFor="data"> DATA * <span>(em branco para deixar em aberto)</span></label>
            <input
                id="data"
                placeholder="Data do Agendamento"
                value={data}
                onChange={event => setData(event.target.value)}
            />

            <label htmlFor="user"> PARA QUEM * <span>(informe para quem é o agendamento)</span></label>
            <input
                id="user"
                placeholder="Nome do funcionário"
                value={user}
                onChange={event => setUser(event.target.value)}
            />

            <button type="submit" className="btn"> Cadastrar Agendamento </button>

        </form>
    );
}