package aula_inatel.prova;

import com.intuit.karate.junit5.Karate;

class ProvaRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("gorest").relativeTo(getClass());
    }    

}
