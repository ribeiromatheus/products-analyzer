import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink, MdDoneAll, MdWarning } from 'react-icons/md';
import { Container, FileInfo, Preview } from './styles';

export default function FileList({ files }) {
    return (
        <Container>
            {files.map(uploadedFile => (
                <li key={uploadedFile.id}>
                    <FileInfo>
                        <Preview src={uploadedFile.preview} />
                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>
                                {uploadedFile.readableSize}{" "}
                                {uploadedFile.uploaded && (
                                    <span className="status"
                                        style={uploadedFile.status === 'Organizado'
                                            ? { color: '#4caf50' }
                                            : { color: '#e57878' }}>
                                        {uploadedFile.status}
                                    </span>
                                )}
                            </span>
                        </div>
                    </FileInfo>

                    <div>
                        {!uploadedFile.uploaded && !uploadedFile.error && (
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: "#4caf50" }
                                }}
                                strokeWidth={10}
                                value={uploadedFile.progress}
                            />
                        )}

                        {uploadedFile.uploaded && (
                            <a
                                href={uploadedFile.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                            </a>
                        )}

                        {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
                        {uploadedFile.error && <MdError size={24} color="#e57878" />}
                        {uploadedFile.uploaded && uploadedFile.status === 'Organizado' && <MdDoneAll size={24} color="#78e5d5" />}
                        {uploadedFile.uploaded && uploadedFile.status === 'Desorganizado' && <MdWarning size={24} color="#e57878" />}
                    </div>
                </li>
            ))}
        </Container>
    );
}