//javascript codevar saldo = document.getElementById("saldo").value;

var saldo = document.getElementById("saldo").value;

    if (saldo==500) {
        document.getElementById("tekst").innerHTML = "salaris is gestort"
    } else {
        document.getElementById("tekst").innerHTML = "Sorry, je hebt te weinig saldo!";
    }
}