function cek() {
    var Q4A = "";
    var Bday = +new Date(1994,02,12);
    Q4A += + ~~ ((Date.now() - Bday) / (31557600000));
    document.getElementById("umur").innerHTML = Q4A;
}