Antes de seguir o passos abaixo certifique-se de que você tem o NODE e o EXPO instalados.

1. Clone o repositório rodando "git clone https://github.com/ribeiromatheus/products-analyzer.git" no seu terminal ou baixe o repositório.
2. Depois digite "npm install" na pasta "backend", "frontend" e "products-analyzer".
3. Vá para a pasta "backend" e crie uma pasta chamada "tmp" e dentro dela uma chamada "uploads".
4. Vá para a pasta "products-analyzer", crie uma pasta dentro de "src" chamada "credentials" depois crie um arquivo JSON chamado "baseUrl" para que você possa adicionar seu ip seguido da porta do servidor.
{
    "ip": "http://<ip>:3333"
}
5. Na pasta "backend", execute npm run dev para rodar o servidor.
6. Na pasta "frontend", execute npm start para rodar o web app.
7. Na pasta "products-analyzer", execute npm start para rodar o mobile app.