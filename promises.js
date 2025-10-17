import fs from 'fs/promises';

async function processarArquivos() {
    try {
        const conteudo = await fs.readFile('entrada.txt', 'utf-8');
        const conteudoEmMaiusculas = conteudo.toUpperCase();
        await fs.writeFile('saida-promises.txt', conteudoEmMaiusculas, 'utf-8');
        console.log('Arquivo escrito com sucesso!');
    } catch (error) {
        console.error('Erro ao processar arquivos:', error);
    }
}

processarArquivos();
