# Desafio Técnico XP - Frontend

Angélica Silva - Turma XP - Tribo B / Trybe

## Importante

Para entrar na aplicação, deve-se utilizar a seguinte credencial:

```
E-mail: teste@xp.com / Senha: 1231231
```

## Instalação

Para instalar a aplicação localmente:

- Clone este repositório em sua máquina com o comando `git clone git@github.com:AngelicaCSSilva/desafio-tecnico-xp-frontend.git`
- Entre dentro da pasta `cd desafio-tecnico-xp-frontend`
- Instale as dependências com `npm install`
- Inicie a aplicação com `npm run dev`
- A aplicação está acessível em `localhost:5173`

## Deploy

O deploy foi realizado no Vercel e pode ser acessado pelo link [desafio-tecnico-xp-angelica.vercel.app](https://www.notion.so/desafio-tecnico-xp-angelica.vercel.app)

## Prévia
<div align="center">
<img src='https://user-images.githubusercontent.com/51302207/180629551-50d8db22-fe87-496d-9442-501402794611.png' height=500px />
<img src='https://user-images.githubusercontent.com/51302207/180629568-090a8b9b-f6df-49ec-bfa8-4c89ab2ed621.png' height=500px />
<img src='https://user-images.githubusercontent.com/51302207/180629593-52583648-4637-4c9e-88b5-d792171db066.png' height=500px />

</div>

## Tecnologias e Bibliotecas utilizadas

- O projeto foi inicializado utilizando o VITE.
- Para ter controle de qualidade do código e padronização, foi adicionado o ESLINT com as configurações do Airbnb.
- Para estilização dos componentes, foi utilizado STYLED COMPONENTS.
- Os testes foram criados utilizando JEST e REACT TESTING LIBRARY.
- Para acesso à cotação das ações, foi utilizado a API [BRAPI](https://github.com/Alissonsleal/brapi), que possui um delay de até 15 minutos.
- Uma API própria foi criada com FASTAPI e hospedada no HEROKU para realizar a autenticação do login e fornecimento dos dados do usuário.

# Login

- Foi criado um formulário de submit com os campos de e-mail e senha. É realizada uma validação destes campos, onde o e-mail deve ter a estrutura **"xx@xx.xx"** e a senha deve possuir **mais de seis caracteres**.
- Após o usuário inserir os dados válidos, o botão de "Acessar" será liberado para uso.
- Ao clicar no botão, a aplicação irá enviar os dados para uma API própria, onde será conferido se o usuário existe e se aquela é a senha dele. Caso esteja tudo certo, a API retornará um `TOKEN`.
    - Caso os dados fornecidos estejam incorretos e/ou não constem no banco de dados, a API retorna uma HTTPException com codigo 401 e detalhes. O detalhe da exceção (E-mail e/ou senha inválidos) é exibido na tela. 

> Cabe destacar que não foi implementado um sistema de verificação do TOKEN na API.
> 
- Após receber o `TOKEN`, a aplicação irá salvá-la no `Session Storage`.
- O e-mail e data/horário deste acesso serão gravados no `Local Storage`.
- Caso o usuário acesse novamente a página após deslogar ou fechar o navegador, o último e-mail inserido será mostrado no campo `e-mail`.

# Investimentos

- Após logar com sucesso, o usuário será direcionado para `/assets`, onde será exibido a sua página de investimentos.
- No campo superior temos uma mensagem de boas-vindas para o usuário no modelo "Olá, (nome do usuário)" e, no lado direito, temos o botão para deslogar/sair da aplicação.
    - Caso o usuário clique no botão de deslogar/sair, os dados serão apagados do `Context Provider` e ele será redirecionado para a página de login.
- São exibidas duas tabelas: Uma das aplicações do usuário, contendo a sigla/ticker, a quantidade de ações que ele possui, o preço unitário atual e os botões de operações (Venda e Compra); Outra com ações disponíveis para compra e que o usuário não possui em sua carteira.
- Não é possível o usuário vender mais ações do que possui em carteira.
- No rodapé é exibido as funcionalidades da aplicação: Investimentos e Conta Digital. Para se movimentar entre as funcionalidades, basta o usuário clicar em qual deseja.

# Conta Digital

- A página exibe o saldo atual do usuário, além de oferecer a opção de `Retirar` ou `Depositar`.
- É exibido um breve extrato das movimentações bancárias, apresentando data, descrição e valor.
- Caso o usuário não possua saldo, não será possível realizar a operação de `Retirar`.
- Não será possível o usuário retirar mais dinheiro do que possui de saldo.
- A função depósito é limitada até R$ 1.000.000,00.
