import React, { useState } from 'react';
import api from '../services/api';

export default function Recognize({ history }) {
    const [upload, setUpload] = useState('');

    async function handleUpload(e) {
        e.preventDefault();

        const response = await api.post('/recognize', { upload });

        console.log(response);
    }

    return (
        <div className="upload-container">
            <form onSubmit={handleUpload} encType="multpart/form-data">
                <input
                    type="file"
                    value={upload}
                    onChange={e => setUpload(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}