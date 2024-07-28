//function
export function sayHello(name){
    console.log(`Hello ${name}, Welcome`)
}


export function sayBye(name){
    console.log(`Bye ${name}, See You`)
}


//variable
export const name = "Dzikri Fauzi Ramdhani";


//class
export class Person {
    constructor(name){
        this.name = name
    }

    sayHello(name){
        console.log(`Hello ${name}, My name is ${this.name}`)
    }
}