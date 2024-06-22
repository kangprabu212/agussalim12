var classSrc = document.getElementsByClassName("tv");
var showValue =  document.getElementById("showValue");
var tvCalc = document.getElementById("hasil");
var arraVal = {};


function dis(a,b) {
    document.getElementById("a").value += a;
    document.getElementById("b").value += b;
    console.log(a,b);
}

// function btnNumber(event) {
//     if (event.key == '0' || event.key == '1' 
//     || event.key == '2' || event.key == '3' 
//     || event.key == '4' || event.key == '5' 
//     || event.key == '6' || event.key == '7' 
//     || event.key == '8' || event.key == '9' 
//         )
//         document.getElementById("a").value = event.key;
//         document.getElementById("b").value = event.key;
// }

for(var i =0; i< classSrc.length; i++){
    var singleClass = classSrc[i];

    singleClass.onkeyup = function(e){
        var val = this.value;

        if(!val.match("^[0-9\-]*$")){
            delete arraVal[this.id];
        }else{
            arraVal[this.id] = val;
        }
        console.log(arraVal);
    }
}

showValue.onclick = function(e){
    if(Object.keys(arraVal).length == 2){
        var a = arraVal.a;
        var b = arraVal.b;
        var steps = "";
        var sign = b < 0 ? "" : "+";

        steps += "<=> "+ a +"x "+ sign +" "+ b +"  = 0 \n";
        steps += "<=> "+ a +"x " + " = " + -b + "\n";
        steps += "<=> "+ "x = " + -b + " / " + a + "\n";
        steps += "<=> "+ "x = " + -b / a;
        console.log(steps);
        document.getElementById("hasil").innerText = steps;

    }else{
        alert("Masukan Nilai Yang Masih Kosong");
    }
}

var classSrc2 = document.getElementsByClassName("sv");
var showValue2 = document.getElementById("showValue2");
var svCalc = document.getElementById("hasil2");
var arrVal2 = {};
for(var j = 0; j < classSrc2.length; j++) {
    var everyClass = classSrc2[j];

    everyClass.onkeyup = function(e) {
        var val2 = this.value;
        if(!val2.match("^[0-9\-]*$")) {
            delete arrVal2[this.id];
        } else {
            arrVal2[this.id] = val2;
        }
        console.log(arrVal2);
    }
}

showValue2.onclick = function(e) {
    if(Object.keys(arrVal2).length == 4 ) {
        var aa = arrVal2.aa;
        var bb = arrVal2.bb;
        var cc = arrVal2.cc;
        var dd = arrVal2.dd;
        var cd = arrVal2.cc * arrVal2.dd;
        var ca = arrVal2.cc - arrVal2.aa;
        var finalResultLeft = cd + parseInt(bb);
        var stepss = "";
        var signs = bb < 0 ? "" : "+";

        stepss += "<=> "+ aa + "x " + signs + " " + bb + " > " + cc + "(x - " + dd + ")\n";
        stepss += "<=> "+ aa + "x " + signs + " " + bb + " > " + cc + "x - " + cd + "\n";
        stepss += "<=> "+ cd + " " + signs + " " + bb + " > " + cc + "x - " + aa + "x\n";
        stepss += "<=> "+ finalResultLeft + " > " + ca + "\n";
        console.log(stepss);
        document.getElementById("hasil2").innerText = stepss;
    } else {
        alert("Masukan Nilai Yang Masih Kosong");
    }
}


function modeBtn() {
    // console.log("btnMode")
    var btnMode = document.getElementById("btnDarkMode");
    var Nav = document.getElementById("nav");
    var Footer = document.getElementById("footer");
    Nav.classList.toggle("dark-mode");
    Footer.classList.toggle("dark-mode");
    btnMode.classList.toggle("btn-dark-mode");

}