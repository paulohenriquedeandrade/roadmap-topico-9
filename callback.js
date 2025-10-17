import fs from 'fs';

fs.readFile('entrada.txt', 'utf-8', (error, data) => {
    if (error) {
        return console.error('Erro ao ler o arquivo:', error);
    }
    console.log('Conteúdo do arquivo:', data);

    fs.writeFile('saida-callback.txt', 'Escrevendo no arquivo via FileSystem', 'utf-8', (error) => {
        if (error) {
            return console.error('Erro ao escrever no arquivo:', error);
        }
        console.log('Arquivo escrito com sucesso!');
    });
});