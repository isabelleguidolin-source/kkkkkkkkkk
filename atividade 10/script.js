function estacao(){
    let mes = prompt("Digite o mês por extenso (ex: Setembro):");
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    if(mes == 'DEZEMBRO'|| mes == 'JANEIRO' || mes == 'FEVEREIRO'){//O || SIGINIFICA "OU"
        
        mostrar.textContent = "a estação é verão"

    }


    if (mes == 'MARÇO'|| mes == 'ABRIL' || mes == 'MAIO'){
        
        mostrar.textContent = "a estação é outono"

    }


    if (mes == 'JUNHO'|| mes == 'JULHO' || mes == 'AGOSTO'){
        
        mostrar.textContent = "a estação é inverno"

    }


    if (mes == 'SETEMBRO'|| mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        
        mostrar.textContent = "a estação é primavera"

    }
    // O USUÁRIO INFORMA O MÊS POR EXTENSO E O SISTEMA INFORMA A ESTAÇÃO DAQUELE MÊS.
    //BOA SORTE !
}