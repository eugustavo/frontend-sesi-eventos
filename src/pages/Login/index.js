import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({ history }) {
    return (
        <>
            <p>
                O <strong>SESI Eventos</strong> é um sistema de <strong>apoio</strong> para eventos realzados pelo <strong>SESI</strong>
            </p>
            <Link to="/new">
                <button className="btn">Entrar</button>
            </Link>
        </>
    );
}
