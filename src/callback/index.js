function suma(numero1, numero2){
    return numero1 + numero2;
}

function calcular(numero1, numero2, callback){
    return callback(numero1, numero2);
}

console.log(calcular(6, 2, suma));

function date(callback){
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 300)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);