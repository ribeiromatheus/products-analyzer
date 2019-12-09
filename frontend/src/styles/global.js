import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        background-color: #ddd;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

    .login-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-container form {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
    }

    .login-container input {
        margin-top: 20px;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 48px;
        padding: 0 20px;
        font-size: 16px;
        color: #666;
    }

    .login-container form input::placeholder {
        color: #999;
    }

    .login-container form button {
        margin-top: 10px;
        border: 0;
        border-radius: 4px;
        height: 48px;
        font-size: 16px;
        background-color: #4caf50;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }
`;