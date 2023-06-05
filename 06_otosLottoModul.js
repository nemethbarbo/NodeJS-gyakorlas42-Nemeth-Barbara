exports.getOtosLottoGeneral = function (){
    let otosNyeroszamok = [];
    for (i = 0; i < 5; i++) {
		randomszam = (Math.floor(Math.random() * 90)) + 1;
        if (randomszam != otosNyeroszamok[i]) {
            otosNyeroszamok.push(randomszam);
        }
    }
    return otosNyeroszamok;
};

