exports.getOtosLotto = function (){
    let nyeroszamok = [];
    for (i = 0; i < 5; i++) {
		randomszam = (Math.floor(Math.random() * 90)) + 1;
        if (randomszam != nyeroszamok[i]) {
            nyeroszamok.push(randomszam);
        }
    }
    return nyeroszamok;
};

