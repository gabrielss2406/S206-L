## Lista de Exercício - Teste de UI 🚀
### Questões 📒
- Utilizando todo conhecimento obtido durante as aulas, desenvolva nomínimo 6 casos de teste para algumwebsiteda sua escolha (Pelo menos 1 caso devesernegativo). Atente-se para as seguintes informações:

    - Recomenda-sea utilização da ferramenta cypress.
    - Nãoé permitido utilizar os websites já testados durante as aulas ou presentesno repositório da disciplina (globalsqa e testpages).
    - O código deve ser capaz de gerar o relatório final de testes. O relatório pode ser o mochawesomeou algum outro que forneça as informações relevantes para o teste.
    - O exercício deve ser entregue via GitHub. Com um README adequado que forneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).
 
### Projeto criado 🤓
- Foi criado um pacote de testes para a página da ```Moodle Graduação``` do Inatel, os testes criados a partir da página foram:
    ```
    ✅  Login com erro (sem usuário e senha)
    ✅  Entrando como visitante e mudando o site de português para inglês
    ✅  Entrando como visitante e tendo acesso bloqueado no curso M01
    ✅  Requisitando nova senha no serviço "Perdeu a senha?"
    ✅  Mudar linguagem na tela inicial, de português para inglês.
    ✅  Entrando como visitante e tendo acesso bloqueado ao perfil de professor
    ```
        


### Como rodar os testes 🧪
- Acesse seu terminal na pasta cypress_testes_ui e digite o seguinte comando:
    ```
    ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
    ```
- Os testes serão feitos e salvos no HTML na pasta: 
    ```
    cypress/reports
    ```
### Feito por 🔎
```
Gabriel de Souza Siqueira - GES - 154
```
