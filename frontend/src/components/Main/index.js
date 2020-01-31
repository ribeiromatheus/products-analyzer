import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import GlobalStyle from '../../styles/global';
import { Container, Content } from './styles';

import FileList from '../FileList';
import Logo from '../Logo';

export default function Main() {
    const [products, setProducts] = useState([]);

    const user_id = localStorage.getItem('user');

    const socket = socketio('http://localhost:3333', {
        query: { user_id }
    });

    useEffect(() => {
        socket.on('product', data => {
            setProducts([...products, data]);
        });
    }, [products, socket]);

    return (
        <Container>
            <Content>
                <Logo />
                {!!products.length && (
                    <FileList files={products} />
                )}
            </Content>
            <GlobalStyle />
        </Container>
    );
}