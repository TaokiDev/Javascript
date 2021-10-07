/*Ejercicio 1*/ 

let claseUno = {
    precio: 12.5,
    nombre: 'Chavito'
}

function isNegative(obj){
   if (obj < 1){
       return true
   } else{
       return false
   }
}

function constructorUno(precioM, nombreM){
    this.precio = precioM
    this.nombre = nombreM
}

/*console.log( isNegative(claseUno.precio) )
let a1 = new constructorUno(3.5, 'Tomate')
console.log( a1.nombre )
console.log( a1.precio )*/

/*Ejercicio 3*/

function funcionEJ3(pm){

    if( typeof(pm) == 'number' ){
        return pm*2 
    }

    else if( typeof(pm) == 'string'){
        return pm.charAt(0) 
    }

    else if( typeof(pm) == 'boolean'){
        return 'YES or NOT'
    }
    else{
        return false
    }

}

/*console.log( funcionEJ3(false) )*/

/*Ejercicio 4*/
const numbs= [6,3,55,-1,7,8,9,34,2]

function checkBelowTen(numbs){
    return numbs <= 10;
}

/*console.log(numbs.filter(checkBelowTen))*/

/*Ejercicio 5*/
const numbs2= [6,3,55,-1,7,8,9,34,2]
const atRange = numbs2.slice(4,8)
/*console.log(atRange)*/

/*Ejercicio 6*/ 
const numbs3= [6,3,55,-1,7,8,9,34,2]
/*console.log(numbs3[8])
console.log(numbs3[0])
console.log(numbs3)*/

/*Ejercicio 7*/
const numbs4= [6,3,55,-1,7,8,9,34,2] 
numbs4.pop()
let atRange2 = numbs4.slice(1)
atRange2.unshift(4)
/*console.log(atRange2)*/

/*Ejercicio 8*/
const numbs5= [6,3,55,-1,7,8,9,34,2] 
numbs5.splice(3,6,0,0)
/*console.log(numbs5)*/

/*Ejercicio 9*/

var arr = [
    [true, false, true],
    Jose =
    {
        nombre:'Manzana',
        precio: {
          iva: 5.6,
          sinIva: 2.6
        }
    },
    true,
    function(){
        return 'Hola mundo'
    },
    function(nombre){
        return 'Hola '+nombre
    },
    [4,5,6]
]

/*Ejercicio 10*/

const names = new Set(["Felix","Antonio","Rosa"])
console.log( names.has("Felix") )
names.delete("Antonio")
console.log( names.values() )
names.add("Ana")
console.log( names.values() )
