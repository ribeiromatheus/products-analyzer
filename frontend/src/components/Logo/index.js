import React from 'react';
import logo from '../../assets/logo.png';
import { Container } from './styles';

const Logo = () => (
    <Container>
        <img className="logo" src={logo} alt="Products Analyzer" />
    </Container>
)

export default Logo;