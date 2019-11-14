import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { cpfMask } from '../../components/mask';

import './styles.css';

export default function Form() {
    
    const [catvalue, setCatvalue] = useState(0);
    const [subvalue, setSubvalue] = useState(0);

    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');

    async function handleSubmit() {
        //event.preventDefault();
        const cat_id = catvalue;
        const sub_id = subvalue;

        await api.post('/acao', { nome, cpf, sexo },
            {
                headers: { cat_id, sub_id }
            });
    }

    useEffect( () => {
        async function load() {
            const cat = await api.get('/categorias');
            setCategorias(cat.data);

            const sub = await api.get('/subcategorias');
            setSubcategorias(sub.data)
        }
        load();
    }, [] );

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="categoria"> ESCOLHA UMA CATEGORIA *</label>
            <select value={catvalue} onChange={e => setCatvalue(e.target.value)}>
                <option key="default" defaultValue> Escolha uma Categoria </option>
                {categorias.map(categoria => (
                    <option key={categoria._id} value={categoria._id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>
            
            <label htmlFor="subcategoria"> ESCOLHA UMA SUBCATEGORIA *</label>
            <select value={subvalue} onChange={e => setSubvalue(e.target.value)}>
                <option key="default" defaultValue> Escolha uma Subcategoria </option>
                {subcategorias.map(subcategoria => (
                    <>
                        {catvalue === subcategoria.categoria
                            ?
                            <option key={subcategoria._id} value={subcategoria._id}>
                                {subcategoria.nome}
                            </option>
                            :
                            ''
                        }
                    </>
                ))}
            </select>

            <label htmlFor="nome"> NOME * <span>(informe o nome completo)</span></label>
            <input
                id="nome"
                placeholder="Ex: Gustavo Pereira de Souza"
                value={nome}
                onChange={event => setNome(event.target.value)}
                required
            />

            <label htmlFor="cpf"> CPF * <span>(somente números)</span></label>
            <input
                id="cpf"
                placeholder="___.___.___-__"
                value={cpf}
                onChange={event => setCpf(cpfMask(event.target.value))}
                maxLength="14"
                minLength="14"
                required
            />

            <label htmlFor="sexo"> SEXO * <span>(informe o sexo do participante)</span></label>
            <input
                id="sexo"
                placeholder="Ex: Masculino"
                value={sexo}
                onChange={event => setSexo(event.target.value)}
                required
            />

            <button type="submit" className="btn"> Cadastrar Atendimento </button>

        </form>
    );
}