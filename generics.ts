function echo<T> (arg: T): T {
  return arg
}
// const result = echo('str')
// const result = echo(123)
const result = echo(true)

function swap<T, U>( tuple:[T, U] ): [U, T] {
  return [tuple[1],tuple[0]]
}
const result2 = swap(['vince', 35])


function echoWithArr<T>(arg: T[]): T[]{
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([1, 2, 4])
interface IWithLength {
  length : number
}
function echoWithLength<T extends IWithLength> (arg: T) : T {
  console.log(arg.length)
  return arg
}

const str = echoWithLength ('str')

const obj = echoWithLength ({ length : 11, width:'1312'})

const arr2 = echoWithLength ([1,2,4])

// echoWithLength(1231) 

/**/
class Queue<T> {
  private data:T[] = [];
  push(item:T) {
    return this.data.push(item) 
  }
  pop(): T | undefined { 
    return this.data.shift()
  }
}
const queue = new Queue<number>();
queue.push(123)
console.log(queue.pop()?.toFixed);

const queue2 = new Queue<string>();
queue2.push('str')
console.log(queue2.pop()?.length);


interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { 
  key: 123,
  value: 'vince'
}
let kp2 : KeyPair< string, number> = {
  key: 'vince',
  value: 1015
}

let arr :number[] = [1,3,5]
let arrTow : Array<number> = [2,4,6]


interface IPlus<T> {
  (a: T, b:T) : T
}

function plus(a: number, b:number): number {
  return a + b;
}
function conmect ( a:string, b:string): string {
  return a + b
}
const a : IPlus<number> = plus
const b : IPlus<string> = conmect