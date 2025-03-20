const dado = [1, 2, 3, 4, 5, 6];
const dead = 10;

const umbralBaseAcertar = 6;
const umbralBaseHerir = 2;
const umbralBaseTumbar = 7;
const umbralBaseMatar = 9;


const funcionMuerte1 = (resultadosTemp) => {
    let masAlto = 0;
    let segundoMasAlto = 0;
    for (let dado of resultadosTemp) {
        if (dado > masAlto) {
            segundoMasAlto = masAlto;
            masAlto = dado;
        } else if (masAlto >= dado && dado > segundoMasAlto) {
            segundoMasAlto = dado;
        }
    }
    return masAlto + segundoMasAlto >= dead;
};

const funcionMuerte2 = (resultadosTemp) => {
    let masAlto = 0;
    let masBajo = 0;
    for (let dado of resultadosTemp) {
        if (dado > masAlto) {
            if (masBajo === 0) {
                masBajo = masAlto;
            }
            masAlto = dado;
        } else if (dado < masBajo) {
            masBajo = dado;
        }
    }
    return masAlto + masBajo >= dead;
};

const funcionMuerte3 = (resultadosTemp) => {
    let masBajo = 7;
    let segundoMasBajo = 7;
    for (let dado of resultadosTemp) {
        if (dado < masBajo) {
            if (masBajo < segundoMasBajo) {
                segundoMasBajo = masBajo;
            }
            masBajo = dado;
        } else if (segundoMasBajo > dado && dado >= masBajo) {
            segundoMasBajo = dado;
        }
    }
    return masBajo + segundoMasBajo >= dead;
};

const generarCombinacionesIterativa = (numDados, dado) => {
    let combinaciones = [[]];
    for (let i = 0; i < numDados; i++) {
        const nuevasCombinaciones = [];
        for (let combinacion of combinaciones) {
            for (let d of dado) {
                nuevasCombinaciones.push([...combinacion, d]);
            }
        }
        combinaciones = nuevasCombinaciones;
    }
    return combinaciones;
};

export const calcularProbabilidades = (numDados, dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura) => {
    const combinaciones = generarCombinacionesIterativa(numDados, dado);
    const total = combinaciones.length;
    let muertes = 0;

    for (let resultadosTemp of combinaciones) {
        if (funcionMuerte3(resultadosTemp)) {
            muertes++;
        }
    }

    const probAcierto = muertes / total;
    const probHerir = (parseInt(dadosBaseHerir) + parseInt(dadosBonoHerir) - parseInt(dadosMinusHerir) - parseInt(armadura)) / 100;

    return {
        probabilidadAcertar: probAcierto,
        probabilidadHerir: total
    };
};