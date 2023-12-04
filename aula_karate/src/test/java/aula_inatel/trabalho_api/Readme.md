## Lista de Exercício - Teste de API 🚀
### Questões 📒
- Utilizando todo conhecimento obtido durante as aulas, desenvolva nomínimo 6 casos de teste para alguma API sua escolha (Pelo menos 2 casos deve ser negativos). Atente-se para as seguintes informações:

    - Recomenda-sea utilização da ferramenta Karate DSL
    - Nãoé permitido utilizar asAPIsjá testadas nos exercícios anteriores.
    - O exercício deve ser entregue via GitHub. Com um README adequado que forneça informações relevantes (Ex: Como executar o projeto e obter o relatóriode testes).
 
### Projeto criado 🤓
- Foi criado um pacote de testes para a API ```[Rick and Morty API](https://rickandmortyapi.com/api/)```, os testes criados foram:
    ```
    ✅  Buscando personagem por id válido
    ✅  Buscando personagem por id inválido
    ✅  Buscando multiplos personagens por ids válidos
    ✅  Buscando episódio por nome inexistente
    ✅  Buscar personagens por status válido
    ✅  Buscar episódios por número de página válido
    ```
        


### Como rodar os testes 🧪
- Estando todo o ambiente Maven configurado, acesse seu terminal e digite o seguinte comando:
    ```
    mvn test -Dtest=RmRunner
    ```
- Os testes serão feitos e salvos no HTML na pasta: 
    ```
    src/test/java/aula_inatel/target/karate-reports
    ```
### Feito por 🔎
```
Gabriel de Souza Siqueira - GES - 154
```
