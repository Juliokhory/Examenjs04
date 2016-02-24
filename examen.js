console.log("dsd");

var votantes=[];

// agregarV(1,"luz","SI","cocha")
// agregarV(2,"julio","NO","lema")

function agregarV(n,un,sn,c){

    var na = [];
    for(var i =0; i<arguments.length; i++){
        console.log(arguments[i]);
        na.push(arguments[i]);
    }

    votantes.push(na);
    console.log(votantes);
}
//Invertir Posicion
Array.prototype.invertirPosicion = function(){
    return this.reverse();
}

//Cambiar SI o NO
Array.prototype.cambiarSN = function(e){
    var el = this[2];
    if(el=="SI"){
        this[2]="NO";
    }else if(el=="NO"){
        this[2]="SI";
    }else{
        console.log("es otra elecion");
    }
    return this;
}


//invirtiendo
// Array.prototype.invertirPosicion = function(f){
//     var w = this;
//     return f(w);
// }
//
// function invertir(e){
//     return e.reverse();
// }
