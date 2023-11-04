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

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
}
const user = {
    name: "emon",
    age: 24,
    gender: "amle"
}
const ress1 = getPropertyValue(user, "age")
// console.log(ress1);


// Asynchronous typescript

type Something = {something: "something"}

const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
        const data: Something = {something: "something"}
        if(data){
            resolve(data)
        } else{
            reject("Error")
        }
    })
}

const showData  = async() => {
    const data: Something = await createPromise()
    // console.log(data);
     
}
showData()


// Conditional Type

type a1 = null
type b1 = string

type X = a1 extends null ? true : false
type y = b1 extends undefined ? true : a1 extends number ? any : false


type Sheikh = {
    car: boolean;
    ship: string;
    plane: string;
}

type CheckVehicle<T> = T extends keyof Sheikh ? true : false

type Hasplane = CheckVehicle<"bike">


//  Mapped types

type AreaNumber = {
    height: number;
    width: number;
}

type AreaString = {
    [key in keyof AreaNumber] : string
}

const calc: AreaString = {
    height: "13",
    width: "12"
}

// If we need multiple type in one arguments
type AreaString2<T> = {
    [key in keyof T] : T[key]
}

const calc2: AreaString2<{height: number; width: string}> = {
    height: 12,
    width: "13"
}


// Utilities Type

// Pick
type Person ={
    name: string;
    age?: number;
    email?: string;
    contact: string;
}
type NameAge = Pick<Person, "name" | "age">

// Omit 
type ContactInfo = Omit<Person, "name" | "age">

// Required
// it makes every key required
type PersonRequired = Required<Person>

//  Partial 
// It makes every key optional, 
type PersonPartial = Partial<Person>

// Record
// we can add multiple key and value that we want, it is dynamic
type MyObj = Record<string, string>

const obj: MyObj = {
    a: "stt",
    b: "dsd",
    buj: "12"
}

const emptyObj: Record<string, unknown> = {
    name: 'emojn',
    age: 23,
    married: false
}