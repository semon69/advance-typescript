import { log } from "console";

let ami: String = "karim"
// console.log(ami);

interface User {
    name: string;
    id: number;
}

const user1: User = {
    name: 'emon',
    id: 12
}


// Type assertion

let lotif: any;

lotif = "ffff";
lotif = [22, 23];

// (lotif as string)
(lotif as number)


const kgToGram = (value: string | number) => {
    if (typeof value === "string") {
        const result = parseFloat(value) * 100
        return `result ${result}`
    }
    else if (typeof value === 'number') {
        return value * 100
    }
}
const result2 = kgToGram(20) as number
const result1 = kgToGram('10') as string
// console.log(result1, result2);

type CustomERR ={
    message: string
}
try{

} catch(error){
    // console.log((error as CustomERR).message);
    
}


// Interface 

type Users = {
    name: string,
    role: number
}

type withRole = Users & { age: number}

interface withRole2 extends  Users {
    gender: string
}

const users1: withRole ={
    name: "ff",
    role: 12,
    age: 22
}
const users2: withRole2 ={
    name: "ff",
    role: 12,
    gender: "male"
}

// type Add = (num1: number, num2: number) => number
interface Add {
    (num1: number, num2: number) : number
}

const add:Add = (num1, num2) => num1 + num2


// Generic  Type

type GenericType<param> = Array<param>

// const people: number[] = [1, 2, 3, 4]
// const people: Array<number> = [1, 2, 3, 4]
const people: GenericType<number> = [1, 2, 3, 4]

// const people2: string[] = ['w', 'r', 't']
// const people2: Array<string> = ['w', 'r', 't']
const people2: GenericType<string> = ['w', 'r', 't']

// generic tuple 

type GenericTuple<X, Y> = [X, Y]

const manus: GenericTuple<string, string> = ["Ami", "Bou"]
const manus2: GenericTuple<number, number> = [6, 9]