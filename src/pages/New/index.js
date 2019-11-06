import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function New({ history }) {
    //const [categorias, setCategorias] = useState([]);
    //const [subcategorias, setSubcategorias] = useState([]);

    const categorias = [
        { _id: "5dc064912bf771343c079f9b", nome: "Saúde" },
        { _id: "5dc0648b2bf771343c079f9a", nome: "Lazer" },
        { _id: "5dc06060107c843db495ddd4", nome: "Educação" }
    ];
    const subcategorias = [
        { _id: "5dc1b84b8b243922e0d61cf6", nome: "Exame de Sangue", cat_id: "5dc064912bf771343c079f9b" },
        { _id: "5dc1ba328b243922e0d61cf8", nome: "Pula-Pula",       cat_id: "5dc0648b2bf771343c079f9a" },
        { _id: "5dc1ab77fe794c0f54e56265", nome: "Aula de Inglês",  cat_id: "5dc06060107c843db495ddd4" }
    ];

    const [catvalue, setCatvalue] = useState(0);
    const [subvalue, setSubvalue] = useState(0);

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');

    async function handleSubmit(event) {
        //event.preventDefault();
        const cat_id = catvalue;
        const sub_id = subvalue;

        await api.post('/acao', {
            nome,
            cpf,
            sexo
        }, {
            headers: { cat_id, sub_id }
        })

        history.push('/new');
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="categoria"> ESCOLHA UMA CATEGORIA *</label>

            <select value={catvalue} onChange={e => setCatvalue(e.target.value)}>
                {categorias.map(categoria => (
                    <option key={categoria._id} value={categoria._id}>
                        {categoria.nome}
                    </option>
                ))}
            </select>

            <label htmlFor="subcategorias"> ESCOLHA UMA SUBCATEGORIA *</label>
            <select value={subvalue} onChange={e => setSubvalue(e.target.value)}>
                {subcategorias.map(subcategoria => (
                    <option key={subcategoria._id} value={subcategoria._id}>  
                        {catvalue == subcategoria.cat_id ? subcategoria.nome: 'Escolha uma categoria'}
                    </option>
                ))}
            </select>

            <label htmlFor="nome"> NOME * <span>(informe o nome completo)</span></label>
            <input
                id="nome"
                placeholder="Nome completo"
                value={nome}
                onChange={event => setNome(event.target.value)}
            />

            <label htmlFor="cpf"> CPF * <span>(somente números)</span></label>
            <input
                id="cpf"
                placeholder="CPF"
                value={cpf}
                onChange={event => setCpf(event.target.value)}
            />

            <label htmlFor="sexo"> SEXO * <span>(informe o sexo do participante)</span></label>
            <input
                id="sexo"
                placeholder="Sexo"
                value={sexo}
                onChange={event => setSexo(event.target.value)}
            />

            <button type="submit" className="btn"> Cadastrar Ação </button>

        </form>
    );
}