let nomeHeroi = "Captain"
let numVitorias = diferenca(1002, 965)
let nivelHeroi = classificador(numVitorias)

console.log("O herói " + nomeHeroi + " tem " + numVitorias + " vitórias e está no nível de " + nivelHeroi)

function diferenca(numA, numB) {
    return numA - numB
}

function classificador(vitorias) {
    let nivelHeroi

    if (vitorias <= 10) {
        nivelHeroi = "Ferro"
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        nivelHeroi = "Bronze"
    }
    else if (vitorias >= 21 && vitorias <= 50) {
        nivelHeroi = "Prata"
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        nivelHeroi = "Ouro"
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        nivelHeroi = "Diamante"
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        nivelHeroi = "Lendário"
    }
    else if (vitorias >= 101) {
        nivelHeroi = "Imortal"
    }

    return nivelHeroi
}