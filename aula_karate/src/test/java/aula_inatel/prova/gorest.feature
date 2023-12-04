Feature: Testando API Gorest

Background: Executa antes de cada teste
        * def url_base = 'https://gorest.co.in/public/v2'

Scenario: Obter lista de usuários
        Given url url_base
        And path '/users'
        When method get
        Then status 200

Scenario: Criar um novo usuário repetido
        Given url url_base
        And path '/users'
        And request request_json
        And header Authorization = 'Bearer fa3f3f29e34512370740f02fc4dbcaa3fb015bfb108876183d6c44878ee11b6e'
        When method post
        Then status 422
        Given url url_base
        And path '/users'
        And request request_json
        And header Authorization = 'Bearer fa3f3f29e34512370740f02fc4dbcaa3fb015bfb108876183d6c44878ee11b6e'
        When method post
        Then status 422

Scenario: (Negativo) Criar usuário sem token de autorização
        Given url url_base
        And path '/users'
        And request request_json
        When method post
        Then status 401

Scenario: (Negativo) Buscando posts de usuário com id inexistente
        Given url url_base
        And path '/users/000/posts'
        And request request_json
        When method get
        Then status 200
        And match response == []

Scenario: Buscando posts de usuário existente e se eles corresponde a esse usuário
        Given url url_base
        And path '/users/1830420/posts'
        And request request_json
        When method get
        Then status 200
        And match each response[*].user_id == 1830420