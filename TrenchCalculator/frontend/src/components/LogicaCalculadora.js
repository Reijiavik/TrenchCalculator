const dado = [1, 2, 3, 4, 5, 6];
const dead = 10;

const umbralBaseAcertar = 6;
const umbralBaseHerir = 2;
const umbralBaseTumbar = 7;
const umbralBaseMatar = 9;

const funcionMuerte1 = (resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados) => {
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

    const suma = segundoMasAlto + masAlto;

    if (suma >= umbralBaseAcertar) resultados.acertar++;
    if (suma < umbralHerir) resultados.acertarSinHerir++;
    if (suma >= umbralHerir) resultados.herir++;
    if (suma >= umbralTumbar) resultados.tumbar++;
    if (suma >= umbralMatar) resultados.matar++;
};

const funcionMuerte2 = (resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados) => {
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
    const suma = masBajo + masAlto;

    if (suma >= umbralBaseAcertar) resultados.acertar++;
    if (suma < umbralHerir) resultados.acertarSinHerir++;
    if (suma >= umbralHerir) resultados.herir++;
    if (suma >= umbralTumbar) resultados.tumbar++;
    if (suma >= umbralMatar) resultados.matar++;
};

const funcionMuerte3 = (resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados) => {
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

    const suma = masBajo + segundoMasBajo;

    if (suma >= umbralBaseAcertar) resultados.acertar++;
    if (suma < umbralHerir) resultados.acertarSinHerir++;
    if (suma >= umbralHerir) resultados.herir++;
    if (suma >= umbralTumbar) resultados.tumbar++;
    if (suma >= umbralMatar) resultados.matar++;
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

export const calcularProbabilidades = (dadosBaseAcertar, dadosBonoAcertar, dadosMinusAcertar, covertura, dadosBaseHerir, dadosBonoHerir, dadosMinusHerir, armadura) => {
    // Asegúrate de que todos los valores sean números válidos
    dadosBaseAcertar = parseInt(dadosBaseAcertar) || 0;
    dadosBonoAcertar = parseInt(dadosBonoAcertar) || 0;
    dadosMinusAcertar = parseInt(dadosMinusAcertar) || 0;
    covertura = parseInt(covertura) || 0;
    dadosBaseHerir = parseInt(dadosBaseHerir) || 0;
    dadosBonoHerir = parseInt(dadosBonoHerir) || 0;
    dadosMinusHerir = parseInt(dadosMinusHerir) || 0;
    armadura = parseInt(armadura) || 0;

    // CALCULO CUANTOS DADOS VAMOS A TIRAR COMO VALOR ABSOLUTO DE BONOS-MINUS + 2
    const dadosATirarAcertar = Math.abs(dadosBonoAcertar - dadosMinusAcertar) + dadosBaseAcertar;
    // GENERO TODAS LAS COMBINACIONES DE DADOS QUE PUEDEN SALIR PARA HERIR
    const dadosATirarHerir = Math.abs(dadosBonoHerir - dadosMinusHerir) + dadosBaseHerir;

    // GENERO TODAS LAS COMBINACIONES DE DADOS QUE PUEDEN SALIR PARA ACERTAR
    const combinacionesAcertar = generarCombinacionesIterativa(dadosATirarAcertar, dado);
    // GENERO TODAS LAS COMBINACIONES DE DADOS QUE PUEDEN SALIR PARA HERIR
    const combinacionesHerir = generarCombinacionesIterativa(dadosATirarHerir, dado);
    const total = combinacionesAcertar.length;

    if (combinacionesAcertar.length === 0) {
        console.error('No valid combinations found for acertar');
    }
    if (total === 0) {
        console.error('Total combinations is 0');
    }

    // GENERO LOS UMBRALES A PARTIR DE LOS BASES Y LA ARMADURA DEL ENEMIGO SIENDO EL UMBRAL NUEVO EL BASE + LA ARMADURA
    const umbralHerir = armadura + umbralBaseHerir;
    const umbralTumbar = armadura + umbralBaseTumbar;
    const umbralMatar = armadura + umbralBaseMatar;

    let muertes = 0;
    // INICIALIZO RESULTADOS
    const resultados = {
        acertar: 0,
        acertarSinHerir: 0,
        herir: 0,
        tumbar: 0,
        matar: 0
    };

    // MODO ES IGUAL 1 2 O 3 DEPENDIENDO DE SI VALOR ABSOLUTO DE BONOS-MINUS ES MAYOR O IGAL A 0 EN CUYO CASO ES 1, SI ES 1 ENTONCES ES 2 Y SI ES >1 ENTONCES ES 3
    let modoDisparo = 1;
    if (Math.abs(dadosBonoAcertar - dadosMinusAcertar) === 1) {
        modoDisparo = 2;
    } else if (Math.abs(dadosBonoAcertar - dadosMinusAcertar) > 1) {
        modoDisparo = 3;
    }
    let modoHerir = 1;
    if (Math.abs(dadosBonoHerir - dadosMinusHerir) === 1) {
        modoHerir = 2;
    } else if (Math.abs(dadosBonoHerir - dadosMinusHerir) > 1) {
        modoHerir = 3;
    }

    // RECORRO TODAS LAS COMBINACIONES DE DADOS QUE PUEDEN SALIR Y LLAMO A LA FUNCION MUERTE EN FUNCION DEL MODO PARA QUE EVALUE EN CADA ITERACION SI HA HERIDO, TUMBADO O MATADO.
    for (let combinacion of combinacionesAcertar) {
        const resultadosTemp = combinacion.slice();
        switch (modoDisparo) {
            case 1:
                funcionMuerte1(resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados);
                break;
            case 2:
                funcionMuerte2(resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados);
                break;
            case 3:
                funcionMuerte3(resultadosTemp, umbralBaseAcertar, umbralHerir, umbralTumbar, umbralMatar, resultados);
                break;
        }
    }

    const probAcertar = resultados.acertar / total || 0;
    const probAcertarSinHerir = resultados.acertarSinHerir / total || 0;
    const probHerir = resultados.herir / total || 0;
    const probTumbar = resultados.tumbar / total || 0;
    const probMatar = resultados.matar / total || 0;

    return {
        probabilidadAcertar: probAcertar,
        probabilidadAcertarSinHerir: probAcertarSinHerir,
        probabilidadHerir: probHerir,
        probabilidadTumbar: probTumbar,
        probabilidadMatar: probMatar
    };
};