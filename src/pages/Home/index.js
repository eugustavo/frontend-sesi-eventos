import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <p>
                O <strong>SESI Eventos</strong> é um sistema de <strong>apoio</strong> para eventos realizados pelo <strong>SESI</strong>
            </p>
            <Link to="/form">
                <button className="btn">Formulário</button>
            </Link>

            <Link to="/categoria">
                <button className="btn">Adicionar Categoria</button>
            </Link>
            
            <Link to="/subcategoria">
                <button className="btn">Adicionar Subcategoria</button>
            </Link>
        </>
    );
}
