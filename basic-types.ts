let isDone : boolean = true;
let age : number = 35;
let binaryNumber : number = 0b10101;

let firstName : string = 'vince';


let message : string = `Hello, ${firstName}, age is ${age}`;

// 所有类型的子类型
let u : undefined = undefined;
let n : null = null;

// let num : number = undefined;

let notSure : any = 4;
notSure = 'maybe it is a string';
notSure = true;

notSure.myName;
notSure.getName();

let numberOrString : number | string = 132;
numberOrString = 'xiang';

let arrOfNumber: number[] = [1,2,3,4];
arrOfNumber.push(5);
// arrOfNumber.push('str');

function test() {
  console.log(arguments);
  // arguments.length;
  // arguments[0]
}

let user : [string, number] = ['vince',35]
// user = ['xiang',12,null]

