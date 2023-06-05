var hatosLotto = require('fs');

exports.getEgyEvHatosLottoGeneral = function() {
    for (i = 1; i <= 52; i++) {
        let hatosNyeroszamok = [];
        while (hatosNyeroszamok.length != 6) {
            randomszam = Math.floor(Math.random() * 45) + 1;
            if (randomszam != hatosNyeroszamok[i]) {
                hatosNyeroszamok.push(randomszam);
            }
        }
    }
    return hatosNyeroszamok;
};

hatosLotto.writeFile('hatoslotto.txt', getEgyEvHatosLottoGeneral()+"", 
    function(err){
        if (err) throw err;
        console.log("Egy év hatoslottó számai :)");
    }
);