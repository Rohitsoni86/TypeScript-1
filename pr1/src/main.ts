import './style.css'


////////********************DATA TYPES************************** */

let myNUMBER: number;

let mySTRING: string;

let myARRR_NUM: number[];

let mySTRING_ARR: string[];


let myANY_TYPE;

let myboolean_Value: boolean = false

console.log(myboolean_Value)



// Declare a tuple type
let myTUPLE: [string, number];



myNUMBER = 66;
console.log(myNUMBER)


mySTRING = "Rohit Soni";
console.log(mySTRING)


myARRR_NUM = [1,2,3,4];
console.log(myARRR_NUM)


mySTRING_ARR = ["1","2","3","4","ALL ELEMENTS SHOULD BE STRING"];
console.log(mySTRING_ARR)


myANY_TYPE = "RRRRR"
console.log(myANY_TYPE)
console.log(typeof myANY_TYPE)

myANY_TYPE = 2222
console.log(myANY_TYPE)
console.log(typeof myANY_TYPE)


myTUPLE = ["Rohit",2222]
console.log(myTUPLE)
console.log(myTUPLE[0])
console.log(myTUPLE[0].substring(0,3))
console.log(myTUPLE[0].split(""))
console.log(myTUPLE[1])



function warnUser(): void {
  console.log("This is my warning message");
}

warnUser()


////////********************OBJECTS************************** */
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.




////////********************Type assertions************************** */

// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”


////////////////////// 11111111111111111 //////////////////////////////////////
let someValue: unknown = "'trust me, I know what Im doing.'";
 
let strLength: number = (someValue as string).length;

console.log(strLength)

////////////////////////////////////////////////////////////////


////////////////////////// 2222222222222222222222222 //////////////////////////////////
let someValue1: unknown = "this is a string";
 
let strLength1: number = (<string>someValue1).length;

console.log(strLength1)

////////////////////////////////////////////////////////////////



////////********************Template STRINGS************************** */


let emplyeeNAME: string = "Rohit Soni"
let emplyeeDETP: string = "IT"

let emplyeeDESC: string = `Emp Name : ${emplyeeNAME} works in ${emplyeeDETP} `

console.log(emplyeeDESC)



////////********************STRING METHODS************************** */

console.log(emplyeeNAME.charAt(5))


console.log("After Contacting : ", emplyeeNAME.concat(emplyeeDESC, mySTRING))

console.log(emplyeeNAME.toLocaleUpperCase())

console.log(emplyeeDETP.toLocaleLowerCase())

console.log(emplyeeNAME.slice(0, 3))

console.log(emplyeeNAME.split(" "))


////////********************STRING METHODS************************** */


////////********************ARRAy METHODS************************** */


////////********************ARRAy METHODS************************** */


////////********************ARRAy NEW METHODS************************** */

let multiType_Array: (string | number)[] 

multiType_Array = ["Rohit", "Soni", 1, 2, 3, 4, "Moh"]

console.log(multiType_Array)
console.log(multiType_Array.length)


console.log(typeof multiType_Array[3])

console.log(typeof multiType_Array[6])


for (let index in multiType_Array) {
    console.log(multiType_Array[index])
}

for (let value of multiType_Array) {
    console.log(value)
}





////////******************** ARRAy METHODS************************** */



/******************** UNIONS & INTERSECTIONS************************** */
/******************** UNIONS & INTERSECTIONS************************** */


// The union of two data types gives us another new type that is able to hold both string and number.

// You will want to write a function that expects a parameter to be either a number or a string and executes a part of the function code depending on the argument passed to it.

function myID_could_be_anyType (id: string | number ) {
  console.log(id)
}



myID_could_be_anyType(5)
myID_could_be_anyType("RadixWeb")

let data: (string | number | boolean)[] 

data = [1, 2, 3, 44, "Rohit", false]

console.log(data)


/********************INTERSECTIONS************************** */

let interSect: string & number

// interSect = 



/******************** UNIONS & INTERSECTIONS************************** */
/******************** UNIONS & INTERSECTIONS************************** */




/******************** Classes and Objects************************** */

class student {                     // Creating Classes   //All properties of classes are by default Public anyone can change them
    name: string;
    enroll: number;
    dept: string;

    constructor(NAME: string, ENROLL: number, DEPT: string) {
        this.name = NAME;
        this.enroll = ENROLL;
        this.dept = DEPT;
    }

    printDetails() {
        return `Name of Student : ${this.name} + Enrollment Number :  ${this.enroll} + Department : ${this.dept}`
    }
    
}

const student_1 = new student("Rohit", 5579, "CSE");             //Creating an Object of Class student
const student_2 = new student("Shivam", 5580, "CSE");             //Creating an Another Object of Class student

console.log(student_1)                                  //Printing Objects
console.log(student_2)                                    //Printing Objects

let allStudnets: student[] = [];                    //here we can create a datatype which stores only the student types 


allStudnets.push(student_1)                       //pushing the Student objects in the array
allStudnets.push(student_2)

console.log(allStudnets)


student_1.name = "Moh"                        //any one can Access the details as they are public
student_2.name = "Roh"                     //any one can Access the details as they are public

console.log(student_1)
console.log(student_2)                     //printing the changed object values



/******************** Classes and Objects************************** */


/******************** ACCESS MODIFIERS************************** */

class student_with_ACCESS {                     // Creating Classes   //All properties of classes are by default Public anyone can change them
   private name: string;    //cannot be accessed
   readonly enroll: number;     //can be access only for readability
   public phone: number;       //can be access for read & change 
   

    constructor(NAME: string, ENROLL: number,PHONE: number) {
        this.name = NAME;
        this.enroll = ENROLL;
        this.phone = PHONE;
        
    }

    printDetails() {
        return `Name of Student : ${this.name} + Enrollment Number :  ${this.enroll} + Phone Number : ${this.phone} `
    }
    
}



const student_with_ACCESS_1 = new student_with_ACCESS("Rohit", 5579, 777777); 

console.log(student_with_ACCESS_1)

// student_with_ACCESS_1.enroll = 33333;       // this shows an error we cant modify
// student_with_ACCESS_1.phone = 444444;      // this shows no error we cant modify



/******************** ACCESS MODIFIERS************************** */

// We can use classes as simple form with constructors as ::::::::::::


class student_with_ACCESS_simplified {                     // Creating Classes   //All properties of classes are by default Public anyone can change them
//    private name: string;    //cannot be accessed
//    readonly enroll: number;     //can be access only for readability
//    public phone: number;       //can be access for read & change 
   

    constructor(
      private  NAME : string,
      readonly  ENROLL: number,
      public   PHONE: number, ) {}

    printDetails() {
        return `Name of Student : ${this.NAME} + Enrollment Number :  ${this.ENROLL} + Phone Number : ${this.PHONE} `
    }
    
}



const student_with_ACCESS_New = new student_with_ACCESS_simplified("Rohit", 5579, 777777); 

console.log(student_with_ACCESS_New)






/******************************************************** INTERFACES ************************************************************** */


interface person {
    name: string,
    age: number,
    eyeColor: string,
    speak(anyString: string): void
    spends(salary: number):number
}


const studentbe : person = {
    name: "Rohit",
    age: 22,
    eyeColor: "black",
    speak(language :string): void{
        console.log(`${this.name} speaks ` + language)
    },
    spends(karcha: number): number{
        console.log(`${this.name} Spends ` + karcha)
        return karcha
    },
    
}

studentbe.speak("hindi")


studentbe.spends(5000)












