import React from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles'

export default function Upload({ onUpload }) {
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive)
            return <UploadMessage>Arraste as imagens aqui...<br />ou clique aqui para buscar</UploadMessage>;

        if (isDragReject)
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;

        return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
    }

    return (
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
            )}
        </Dropzone>
    );
}