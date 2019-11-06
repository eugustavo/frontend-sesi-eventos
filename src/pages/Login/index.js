import React from 'react';
import { Link } from 'react-router-dom';

export default function Login({ history }) {
    return (
        <>
            <p>
                Sistema para <strong>registro</strong> de atendimentos no evento <strong>Ação Global</strong>

            </p>
            <Link to="/new">
                <button className="btn">Entrar</button>
            </Link>
        </>
    );
}
