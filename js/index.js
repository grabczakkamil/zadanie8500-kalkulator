'use strict';
function download(a) {
    document.getElementById("display").value+=a;
    
}
function clean() {
    document.getElementById("display").value="";
}

function calculate() {
    var screen = document.getElementById("display").value;
    document.getElementById("display").value=eval(screen);
    
}