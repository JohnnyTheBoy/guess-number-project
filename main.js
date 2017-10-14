//#region - description
// Kompjuter treba da generiše broj od 0 do 99. Korisnik ima 5 pokušaja da pogodi koji je broj u pitanju.
// Ako pogodi broj, treba da dobije poruku tipa "Pobedio si", a ako pogreši treba da dobije poruku "Moj broj je veći"
// ili "Moj broj je manji". Ako iskoristi svih 5 pokušaja treba da dobije poruku "Iskoristili ste svih 5 pokušaja,
// traženi broj je bio 23".
//#endregion


//#region -  Random number generator, returns hidden random number based on given range.
function generateNumber(min, max) {
    var hiddenNum = Math.round((Math.random() * (max - min)) + min);
    console.log("Hidden number is " + hiddenNum + ".");
    return hiddenNum;
}
//#endregion

