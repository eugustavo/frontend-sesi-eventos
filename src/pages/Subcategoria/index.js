import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Subcategoria() {

    const [catvalue, setCatvalue] = useState(0);
    const [subcat, setSubcat] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function load(){
            const { data } = await api.get('/categorias');
            setCategorias(data);
        }
        load();
    }, []);



    async function handleSubmit(event) {
        const cat_id = catvalue;
        const nome = subcat;

        await api.post('/subcategoria', {nome: nome} ,
        {
            headers: { cat_id }
        });
    }

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
            
            <label htmlFor="subcat"> NOME * <span>(informe o nome da subcategoria)</span></label>
            <input
                id="subcat"
                placeholder="Ex: Exame de Sangue"
                value={subcat}
                onChange={event => setSubcat(event.target.value)}
                required
            />

            <button type="submit" className="btn"> Cadastrar Subcategoria </button>
        </form>
    );
}
