{

    const array = ["Dzikri", "Fauzi", "Ramdhani"];

    //menggunakan anonymous function
    array.forEach(function (value, index){
        console.log(`${index} : ${value}`);
    });

    //menggunakan arrow function
    array.forEach((value, index) => console.log(`${index} : ${value}`));

}

{   //queue

    const queue = [];

    //menambahkan data ke array kosong
    queue.push("Dzikri");
    queue.push("Fauzi");
    queue.push("Ramdhani");

    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());
    console.log(queue.shift());

}
    
{   //stack

    const stack = [];

    //menambahkan data ke array kosong
    stack.push("Dzikri");
    stack.push("Fauzi");
    stack.push("Ramdhani");

    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());

}
        
{   //search

    const search = [1,2,3,4,5,1,2,3,4,5];

    console.log(search.find(value => value > 3));
    console.log(search.findIndex(value => value > 3));
    console.log(search.includes(7));
    console.log(search.indexOf(5));
    console.log(search.lastIndexOf(5));

}

{   //filter

    const angka = [1,2,3,4,5,6,7,8,9,10];

    const ganjil = angka.filter(value => value %2 ===1);
    const genap = angka.filter(value => value %2 ===0);

    console.log(`angka ganjil dari 1-10 : ${ganjil}`);
    console.log(`angka genap dari 1-10 : ${genap}`);

}

{   //transform

    const name = ["Dzikri", "Fauzi", "Ramdhani"];
    const namesUpper = name.map(value => value.toUpperCase());
    console.log(namesUpper);

    const namesReduce = name.reduce((before, value) => before + " " + value);
    console.log(namesReduce);

    const namesReduceRight = name.reduceRight((before, value) => before + " " + value);
    console.log(namesReduceRight);

    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const total = numbers.reduce((before, value) => before + value);
    console.log(total);

}