console.log("dsd");

var votantes=[];

function agregarV(n,un,sn,c){

    var na = [];
    for(var i =0; i<arguments; i++){
        console.log(arguments[i]);
        na.push(arguments[i]);
    }
    console.log(na);
    votantes.push(na);
    console.log(votantes);
}
//invirtiendo
Array.prototype.invertirUsername = function(f){
    var w = this;
    return f(w);
}

function invertir(e){
    return e.reverse();
}
