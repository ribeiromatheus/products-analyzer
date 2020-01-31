import React from 'react';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';
import { Container, FileInfo, Preview } from './styles';

import filesize from 'filesize';

export default function FileList({ files }) {
    return (
        <Container>
            {files.map(product => (
                <li key={product.id}>
                    <FileInfo>
                        <Preview src={product.image_url} />
                        <div>
                            <strong>{product.name}</strong>
                            <span>
                                {filesize(product.size)}{" "}
                                <span className="status"
                                    style={product.status === 'Organizado'
                                        ? { color: '#4caf50' }
                                        : { color: '#e57878' }}>
                                    {product.status}
                                </span>
                            </span>
                        </div>
                    </FileInfo>

                    <div>
                        <a
                            href={product.image_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>

                        {product.status === 'Organizado' && <MdCheckCircle size={24} color="#78e5d5" />}
                        {product.status === 'Desorganizado' && <MdError size={24} color="#e57878" />}
                    </div>
                </li>
            ))}
        </Container>
    );
}