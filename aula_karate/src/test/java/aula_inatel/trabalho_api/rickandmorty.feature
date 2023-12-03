Feature: Testando API RickAndMorty

Background: Executa antes de cada teste
        * def url_base = 'https://rickandmortyapi.com/api'


Scenario: Buscando personagem por id válido (id 2).
        Given url url_base
        And path '/character/2'
        When method get
        Then status 200
        And match $.id == 2

Scenario: (Negativo) Buscando personagem por id inválido (id 827)
        Given url url_base
        And path '/character/827'
        When method get
        Then status 404

Scenario: Buscando multiplos personagens por ids válidos (1, 2 e 3)
        Given url url_base
        And path '/character/1,2,3'
        When method get
        Then status 200
        And match response[*].id contains only [1,2,3]

Scenario: (Negativo) Buscando episódio por nome inexistente.
        Given url url_base
        And path '/episode/?name=EpisodioInexistente'
        When method get
        Then status 404

Scenario: Buscar personagens por status válido
        Given url url_base
        And path '/character/?status=alive'
        When method get
        Then status 200
        And match response.results[*].status contains 'Alive'


Scenario: Buscar episódios por número de página válido
        Given url url_base
        And path '/episode?page=2'
        When method get
        Then status 200
        And match response.results != null
        And match response.results[*] != null
        And match response.results[*].id != null