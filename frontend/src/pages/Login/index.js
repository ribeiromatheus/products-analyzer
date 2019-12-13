import React, { useState } from 'react';
import Logo from '../../components/Logo'
import api from '../../services/api';
import './styles.css';

export default function Login({ history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    async function handleSubmit(event) {
        event.preventDefault();

        // const response = await api.post('/sessions', {
        //     email,
        //     password
        // });

        // const { _id } = response.data;

        // localStorage.setItem('user', _id);

        history.push('/main');
    }

    return (
        <div className="container">
            <div className="content">
                <Logo />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-MAIL * </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Seu email"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <label htmlFor="senha">SENHA * </label>
                    <input
                        type="senha"
                        id="senha"
                        placeholder="Sua senha"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button className="btn" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}