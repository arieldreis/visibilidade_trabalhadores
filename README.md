# Visibilidade de Trabalhadores

Plataforma web para divulgar serviços e conectar profissionais a pessoas que procuram soluções para o dia a dia. O projeto busca tornar a descoberta de prestadores mais simples, com uma experiência acessível e organizada.

## Sobre o projeto

A aplicação reúne funcionalidades para explorar serviços por categoria, consultar anúncios e oferecer uma área para que profissionais apresentem seu trabalho. O repositório também inclui uma API em desenvolvimento para integrar a aplicação ao Supabase.

O projeto está em desenvolvimento e é destinado a apoiar a divulgação de serviços na comunidade da Igreja de Jesus Cristo dos Santos dos Últimos Dias.

## Funcionalidades

- Exploração e pesquisa de serviços
- Navegação por categorias profissionais
- Páginas de cadastro e login
- Criação e visualização de anúncios de serviços
- Estrutura inicial de API com Express e conexão ao Supabase

Alguns fluxos de autenticação e persistência de dados ainda estão em desenvolvimento.

## Tecnologias

- React e Vite
- JavaScript e CSS
- React Router
- Node.js e Express
- Supabase

## Executar localmente

É necessário ter Node.js e npm instalados.

1. Acesse a pasta da aplicação:

   ```bash
   cd work_visiable
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente em `work_visiable/.env`:

   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANONKEY=sua_chave_anon_do_supabase
   PORT=3000
   ```

   Use os valores do seu projeto Supabase. Não inclua chaves secretas ou `service_role` em código do navegador nem em arquivos versionados.

4. Em um terminal, inicie a interface:

   ```bash
   npm run dev
   ```

5. Em outro terminal, inicie a API:

   ```bash
   npm start
   ```

A interface é servida pelo Vite (normalmente em `http://localhost:5173`) e a API usa a porta `3000` por padrão.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento do frontend |
| `npm run build` | Gera a versão de produção do frontend |
| `npm run preview` | Pré-visualiza a versão compilada |
| `npm run lint` | Executa a análise estática do código |
| `npm start` | Inicia o servidor Express |

## Estrutura principal

```text
work_visiable/
├── back_end/       # API, rotas, controllers e conexão com o Supabase
├── src/
│   ├── components/ # Componentes reutilizáveis
│   ├── pages/      # Páginas da aplicação
│   └── styles/     # Estilos
└── package.json
```

## Próximos passos

- Concluir os fluxos de autenticação e gerenciamento de serviços
- Definir políticas de acesso e persistência no Supabase
- Ampliar a validação e o tratamento de erros da API
- Aprimorar a experiência em dispositivos móveis

## Autor

Ariel Marinho
