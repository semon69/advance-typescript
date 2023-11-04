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

type CustomERR = {
    message: string
}
try {

} catch (error) {
    // console.log((error as CustomERR).message);

}


// Interface 

type Users = {
    name: string,
    role: number
}

type withRole = Users & { age: number }

interface withRole2 extends Users {
    gender: string
}

const users1: withRole = {
    name: "ff",
    role: 12,
    age: 22
}
const users2: withRole2 = {
    name: "ff",
    role: 12,
    gender: "male"
}

// type Add = (num1: number, num2: number) => number
interface Add {
    (num1: number, num2: number): number
}

const add: Add = (num1, num2) => num1 + num2


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


// Generic interface

interface Behave<T, Y = null> {
    name: string;
    age: number;
    obosta: {
        valo: boolean
        kharap: boolean
    };
    phone: T;
    Price?: Y
}

const emon: Behave<{
    name: string;
    company: string
}> = {
    name: "emm",
    age: 23,
    obosta: {
        valo: false,
        kharap: true
    },
    phone: {
        name: 'samsung',
        company: "sumsu"
    }
}
type Phones = {
    name: string;
    dam: number;
    free: boolean
}
const emon2: Behave<Phones> = {
    name: "emm",
    age: 23,
    obosta: {
        valo: false,
        kharap: true
    },
    phone: {
        name: 'samsung',
        dam: 2000,
        free: false
    }
}
// we can also use default parameter


// Function with generic

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param]
}

const res1 = createArrayWithGeneric<number>(23)
const res2 = createArrayWithGeneric<{ num: Number; name: string }>({ num: 23, name: "emon" })

// console.log(res2);



// Constraints
//  here the extended type must be available in argument and any others can be added
const courseStudent = <T extends { name: string, id: number; email: string }>(student: T) => {
    const course = "Web development"
    return {
        ...student,
        course
    }
}

const student1 = courseStudent({
    id: 122,
    name: "Emon",
    email: "e@gmail.com",
    no: 1922222,
    gf: "2 ta"
})
const student2 = courseStudent({
    id: 112,
    name: "Joy",
    email: "j@gmail.com",
    no: 1922222
})
const student3 = courseStudent({
    id: 12,
    name: 'eee',
    email: "j@gmail.com",
    no: 1922222
})
// console.log(student3);


// Generic constraint with keyOf operator

type vehicle = {
    bike: string;
    car: string;
    airplane: string;
}

type Owner = "bike" | "car" | "airplane" // Manually
type Owner2 = keyof vehicle

const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
}
const user = {
    name: "emon",
    age: 24,
    gender: "amle"
}
const ress1 = getPropertyValue(user, "age")
console.log(ress1);
