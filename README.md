Este é um projeto React.js usando KendoUI inicializado com a extensão do [VSCode](https://www.telerik.com/kendo-react-ui/components/getting-started/vscode-extensions/).

## Instalação

1. Clone o repositório: `https://github.com/felpsalvs/kendoui-react.git`
2. Instale as dependências: `npm install` ou `yarn install`

## Configuração

Certifique-se de configurar as variáveis de ambiente e estar na versão 20 ou maior do Node. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis. 

1. É necessário criar uma conta no [TMDB](https://www.themoviedb.org/) e gerar sua Chave da API em `Configurações -> API` e preencha:

```bash
NEXT_PUBLIC_TMDB_TOKEN=
```

2. A variável abaixo é a URL da API, basta copiar e usar:

```bash
NEXT_PUBLIC_TMBD_BASE_URL=https://api.themoviedb.org
```

## Executando o Projeto

Para iniciar o ambiente de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Executando Testes

Para executar os testes, utilize o seguinte comando:

```bash
npm test
# ou
yarn test
```

Para executar os testes em modo observador, use:

```bash
npm run test:watch
# ou
yarn test:watch
```

Para executar os testes em modo CI, utilize:

```bash
npm run test:ci
# ou
yarn test:ci
```
