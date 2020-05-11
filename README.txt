Antes de seguir o passos abaixo certifique-se de que você tem o NODE e o EXPO instalados.

Levando em consideração que você já tem pasta inteira do projeto,
siga os passos abaixo:

1. Digite "npm install" na pasta "backend", "frontend" e "products-analyzer".
3. Vá para a pasta "backend" e crie uma pasta chamada "tmp" e dentro dela uma chamada "uploads".
4. Vá para a pasta "products-analyzer", crie uma pasta dentro de "src" chamada "credentials" depois crie um arquivo JSON chamado "baseUrl"
para que você possa adicionar seu ip seguido da porta do servidor no formato abaixo:
{
    "ip": "http://<ip>:3333"
}
5. Na pasta "backend", execute npm run dev para rodar o servidor.
6. Na pasta "frontend", execute npm start para rodar o web app.
7. Na pasta "products-analyzer", execute npm start para rodar o mobile app.