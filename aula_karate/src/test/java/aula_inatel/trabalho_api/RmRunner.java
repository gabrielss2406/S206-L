package aula_inatel.trabalho_api;

import com.intuit.karate.junit5.Karate;

class RmRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("rickandmorty").relativeTo(getClass());
    }    

}
