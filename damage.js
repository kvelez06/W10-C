var userChar = Cookies.get("character");

function clearChar() {
    Cookies.remove("character");
    window.open("index.html", "_self");
}

if(userChar == "char-ninja") {
    document.getElementById("char-container").innerHTML = "<p> NINJA </p>";
} else if(userChar == "char-pirate") {
    document.getElementById("char-container").innerHTML = "<p> PIRATE </p>";
} else {
    document.getElementById("char-cointainer") = "<p> E R R O R ! </p>";
}


var charMaxHP = document.getElementById("charHP");
charMaxHP.innerHTML = 100;

var oppMaxHP = document.getElementById("oppHP");
oppMaxHP.innerHTML = 100;

var winner = document.getElementById("result");


function attackOne() {
    oppCurrentHP = oppMaxHP.innerHTML - Math.floor((Math.random() *7) + 1);
    oppMaxHP.innerHTML = oppCurrentHP;
    charCurrentHP = charMaxHP.innerHTML - Math.floor((Math.random() * 7) + 1);

        if(oppCurrentHP <= 0) {
            winner.innerHTML = "<h4> VICTORY! </h4>";
        } else if(charCurrentHP <= 0) {
            winner.innerHTML = "<h4> TRY AGAIN! </h4>";
        } else {
            winner.innerHTML = "<p> e r r o r 30300";
        }
}

function attackTwo() {
    oppCurrentHP = oppMaxHP.innerHTML - Math.floor((Math.random() *9) + 2);
    oppMaxHP.innerHTML = oppCurrentHP;
    charCurrentHP = charMaxHP.innerHTML - Math.floor((Math.random() * 7) + 5);

        if(oppCurrentHP <= 0) {
            winner.innerHTML = "<h4> VICTORY! </h4>";
        } else if(charCurrentHP <= 0) {
            winner.innerHTML = "<h4> TRY AGAIN! </h4>";
        } else {
            winner.innerHTML = "<p> e r r o r 30300";
        }
}