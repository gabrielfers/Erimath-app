# Erimath 📚

Bem-vindo ao repositório do Erimath! Este é um site educacional criado para a Professora de Matemática Eriane André, com o objetivo de compartilhar materiais de estudo, avaliações e dicas para seus alunos.

## Funcionalidades

O site é uma aplicação de página única (SPA) e possui as seguintes seções:

*   **Início**: Uma página de boas-vindas com uma introdução ao propósito do site.
*   **Avaliações**: Uma seção onde os alunos podem visualizar e baixar avaliações anteriores em formato PDF para praticar.
*   **Sobre Mim**: Uma breve biografia sobre a Professora Eriane André.
*   **Contato**: Um formulário para que os visitantes possam enviar mensagens, dúvidas ou sugestões.

## Tecnologias Utilizadas

*   **React**: Biblioteca JavaScript para construir a interface de usuário.
*   **CSS**: Estilização customizada para cada componente, garantindo uma identidade visual única.
*   **HTML**: Estrutura semântica do site.
*   **JavaScript**: Lógica e interatividade da aplicação.

## Estrutura do Projeto

O projeto foi organizado com uma arquitetura baseada em componentes para facilitar a manutenção e reutilização de código. Os principais componentes estão localizados em `src/components`:

```
src/
└── components/
    ├── avaliacoes/     # Seção de avaliações
    ├── cardAvaliacao/  # Card individual para cada avaliação
    ├── contato/        # Seção de contato com formulário
    ├── header/         # Cabeçalho fixo com navegação
    ├── inicio/         # Seção de boas-vindas
    └── sobreMim/       # Seção de biografia
```

## Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório**
    ```sh
    git clone https://github.com/gabrielfers/Erimath-app.git
    ```

2.  **Navegue até o diretório do projeto**
    ```sh
    cd erimath-app
    ```

3.  **Instale as dependências**
    ```sh
    npm install
    ```

4.  **Inicie a aplicação em modo de desenvolvimento**
    ```sh
    npm start
    ```

    Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto no seu navegador.


