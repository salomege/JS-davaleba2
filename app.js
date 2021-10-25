//1
const myArray=[1, 8, 15, 20, 30];

console.log (myArray[0]+myArray[1]+myArray[2]+myArray[3]+myArray[4]);

//2
let array = [
    {
        name: "salome",
        age: 31,
        address: "Tbilisi",
    },

    {
        name: "Sofia",
        age: 25,
        address: "Rome",
    },

    {
        name: "John",
        age: 28,
        address: "USA",
    }
]

//3
console.log ("my name is:", array[0].name);
console.log ("my age is:", array[0].age);
console.log ("my address is:", array[0].address);

//4
if (array[0].age < 19){
    console.log ("I am teenager");
}
else{
    console.log ("I am an adult"); 
}