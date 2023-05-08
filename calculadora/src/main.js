var sumar;
var restar;
var multiplicar;
var dividir;
var reset;
var igual;
var operandoa;
var operandob;
var operacion;
var resultado = document.getElementById("resultado");


var teclado = document.getElementById("tResult");

const boton1 = document.getElementById("btn_1");
boton1.addEventListener("click", (evento) => {
    //console.log(evento);//    
    const valor = 1;
    teclado.value = `${teclado.value}${valor}`;
})

var teclado2 = document.getElementById("tResult");

const boton2 = document.getElementById("btn_2");
boton2.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 2;
    teclado2.value = `${teclado2.value}${valor}`;

})

var teclado3 = document.getElementById("tResult");

const boton3 = document.getElementById("btn_3");
boton3.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 3;
    teclado3.value = `${teclado3.value}${valor}`;
})

var teclado4 = document.getElementById("tResult");

const boton4 = document.getElementById("btn_4");
boton4.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 4;
    teclado4.value = `${teclado4.value}${valor}`;
})

var teclado5 = document.getElementById("tResult");

const boton5 = document.getElementById("btn_5");
boton5.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 5;
    teclado5.value = `${teclado5.value}${valor}`;
})

var teclado6 = document.getElementById("tResult");

const boton6 = document.getElementById("btn_6");
boton6.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 6;
    teclado6.value = `${teclado6.value}${valor}`;
})

var teclado7 = document.getElementById("tResult");

const boton7 = document.getElementById("btn_7");
boton7.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 7;
    teclado7.value = `${teclado7.value}${valor}`;
})

var teclado8 = document.getElementById("tResult");

const boton8 = document.getElementById("btn_8");
boton8.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 8;
    teclado8.value = `${teclado8.value}${valor}`;
})

var teclado9 = document.getElementById("tResult");

const boton9 = document.getElementById("btn_9");
boton9.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 9;
    teclado9.value = `${teclado9.value}${valor}`;
})

var teclado0 = document.getElementById("tResult");

const boton0 = document.getElementById("btn_0");
boton0.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = 0;
    teclado0.value = `${teclado0.value}${valor}`;
})

var tecladopun = document.getElementById("tResult");

const botonpunto = document.getElementById("btn_pun");
botonpunto.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = (".");
    tecladopun.value = `${tecladopun.value}${valor}`;
})

var tecladosum = document.getElementById("tResult");

const botonsuma = document.getElementById("btn_sum");
botonsuma.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("+");
    tecladosum.value = `${tecladosum.value}${valor}`;
})

var tecladores = document.getElementById("tResult");

const botonresta = document.getElementById("btn_rest");
botonresta.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("-");
    tecladores.value = `${tecladores.value}${valor}`;
})

var tecladomult = document.getElementById("tResult");

const botonmultiplicacion = document.getElementById("btn_mul");
botonmultiplicacion.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("x");
    tecladomult.value = `${tecladomult.value}${valor}`;
})

var tecladodiv = document.getElementById("tResult");

const botondivision = document.getElementById("btn_div");
botondivision.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("/");
    tecladodiv.value = `${tecladodiv.value}${valor}`;
})

var tecladoig = document.getElementById("tResult");

const botonigual = document.getElementById("btn_ig");
botonigual.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("=");
    tecladoig.value = `${tecladoig.value}${valor}`;
})

var tecladoclear = document.getElementById("tResult");

const botonlimpiar = document.getElementById("btn_c");
botonlimpiar.addEventListener("click", (evento) => {
    //console.log(evento);//
    const valor = ("");
    tecladoclear.value = `${tecladoclear.value}${valor}`;
})

reset = function (evento) {
    resetear();
}

sumar = function (evento) {
    operandoa = resultado.textContent;
    operacion = "+";
    return (operandoa+operandob);
}

restar = function (evento) {
    operandoa = resultado.textContent;
    operandob = "-";
    limpiar();
}

multiplicar = function (evento) {
    operandoa = resultado.textContent;
    operandob = "x";
    limpiar();
}

dividir = function (evento) {
    operandoa = resultado.textContent;
    operandob = "/";
    limpiar();
}

igual = function (evento) {
    operandob = resultado.textContent;
    resolver();
}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "x":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}
