# Script Node.js - Leitura e Escrita de Arquivos

Este projeto faz parte da entrega do nono tópico do roadmap de estágio, focado em operações de leitura e escrita de arquivos em Node.js utilizando callbacks e Promises.

## Tecnologias Utilizadas

- Node.js
- pnpm
- ES Modules

## Estrutura do Projeto

```
.
├── package.json
├── entrada.txt
├── callbacks.js
├── promises.js
├── saida-callback.txt
├── saida-promises.txt
└── README.md
```

## Scripts Criados

### callbacks.js

Script que demonstra o uso de callbacks para operações assíncronas de arquivos:

- Lê o conteúdo de `entrada.txt`
- Escreve em `saida-callback.txt`
- Utiliza `fs.readFile()` e `fs.writeFile()` com callbacks aninhados

### promises.js

Script que demonstra o uso de Promises com async/await para operações assíncronas:

- Lê o conteúdo de `entrada.txt`
- Transforma o texto para maiúsculas
- Escreve o resultado em `saida-promises.txt`
- Utiliza `fs/promises` com async/await para código mais limpo e legível

## Importação

### Callbacks

```javascript
import fs from "fs";
```

### Promises

```javascript
import fs from "fs/promises";
```

## Como Executar os Scripts

### Script com Callbacks

```bash
node callbacks.js
```

### Script com Promises

```bash
node promises.js
```

## Resultados

Após executar cada script:

- `callbacks.js` gera o arquivo `saida-callbacks.txt` com o conteúdo em maiúsculas
- `promises.js` gera o arquivo `saida-promises.txt` com o conteúdo em maiúsculas
- Mensagens de sucesso são exibidas no console

## Diferenças Entre as Abordagens

**Callbacks:** Abordagem tradicional que resulta em código aninhado (callback hell) quando há múltiplas operações encadeadas. Cada operação assíncrona recebe uma função callback para executar após sua conclusão.

**Promises com async/await:** Abordagem moderna que torna o código assíncrono linear e mais legível, similar a código síncrono. Facilita o tratamento de erros com try/catch e evita aninhamento excessivo.
