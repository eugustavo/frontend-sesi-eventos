import React, { useState }from 'react';
import api from '../../services/api';

export default function Categoria() {
    const [nome, setNome] = useState('');

    async function handleSubmit(){
        await api.post('/categoria', { nome });
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="nome"> NOME * <span>(Informe o nome da Categoria)</span></label>
        <input
            id="nome"
            placeholder="Ex: Saúde"
            value={nome}
            onChange={event => setNome(event.target.value)}
            required
        />
        <button type="submit" className="btn"> Cadastrar Categoria </button>
    </form>
  );
}
