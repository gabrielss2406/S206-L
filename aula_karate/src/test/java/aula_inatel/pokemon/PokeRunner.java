package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

class PokeRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
