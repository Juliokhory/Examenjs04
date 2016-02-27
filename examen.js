console.log("dsd");
var votantes = [
    [1, 'Juliosguz', 'SI', 'Cochabamba'],
    [2, 'Carlitos', 'NO', 'Cochabamba'],
    [3, 'Pedro', 'SI', 'Cochabamba'],
    [4, 'Oscar', 'NO', 'Cochabamba'],
];

console.table(votantes);

//invirtiendo las posiciones.
Array.prototype.invertirPosicion = function(){
    var p = this.length;
    var ax = [];
    for(var i=0; i<=this.length; i++){
        ax[i]=this[p-1];
        p--;
    }
    for(var i=0; i<=(ax.length-2); i++){
        this[i]=ax[i];
    }
    console.table(this);
}

//Cambiar el SI por No y el No por el SI
Array.prototype.cambiarEleccion = function(){
    for(var i=0; i<this.length; i++){
        if(this[i][2]=="SI"){
            this[i][2]="NO";
        }else if(this[i][2]=="NO"){
            this[i][2]="SI";
        }
    }
    console.table(this);
}

//Invertir el orden de cada letra del campo user name
Array.prototype.invertirNombre = function(){

    for(var i=0; i<this.length; i++){

        var nombre = this[i][1];
        var nn ='';
        for(var j=nombre.length-1; j>=0; j--){
            nn=nn+nombre[j];
        }
        this[i][1]=nn;
    }
console.table(this);
}

//Cambiando el nobre de ciudad
Array.prototype.cambiarCiudad = function(){

    for(var i=0; i<this.length; i++ ){
        var nc = this[i][3];
        if(nc=="Cochabamba" || nc=="La paz" || nc=="Santa Cruz" || nc=="Oruro" || nc=="Tarija" || nc=="Sucre"){
            this[i][3]="Pluton";
        }
    }
    console.table(this);
}

Array.prototype.invertirNombreSoN = function(){

    for(var i=0; i<this.length; i++){

        //Invirtiendo solo el nombre
        var nombre = this[i][1];
        var nn ='';
        for(var j=nombre.length-1; j>=0; j--){
            nn=nn+nombre[j];
        }
        this[i][1]=nn;

        //Agregando formato 'GANA EL ..'
        var sn = this[i][2];
        if(sn=="SI"){
            this[i][2]="GANA EL NO";
        }
        else{
            this[i][2]="GANA EL SI";
        }
    }
console.table(this);
}


// var nombre = "julio";
// var aux = [];
// var aux2=[]
// var position = nombre.length;
//
// console.log(position);
//
// for(var i=0; i<nombre.length; i++){
//     aux[i]=nombre[(position-1)-i];
//     console.log(nombre[i]);
// }
//
// console.log(aux, aux.length);
//
// aux2[0] = aux[0];
//
// for(var i =0; i<=aux.length-2; i++){
//     console.log(i);
//     aux2[0]=aux2[0]+aux[i+1];
// }
// nombre=aux2[0];
// console.log(nombre);

//Invertir Posicion


//Cambiar SI o NO
// Array.prototype.cambiarSN = function(e){
//     var el = this[2];
//     if(el=="SI"){
//         this[2]="NO";
//     }else if(el=="NO"){
//         this[2]="SI";
//     }else{
//         console.log("es otra elecion");
//     }
//     return this;
// }

//invirtiendo
// Array.prototype.invertirPosicion = function(f){
//     var w = this;
//     return f(w);
// }
//
// function invertir(e){
//     return e.reverse();
// }

//Tarea no requerida pero por siacaso
// function agregarV(n,un,sn,c){
//
//     var na = [];
//     for(var i =0; i<arguments.length; i++){
//         console.log(arguments[i]);
//         na.push(arguments[i]);
//     }
//
//     votantes.push(na);
//     console.log(votantes);
// }
