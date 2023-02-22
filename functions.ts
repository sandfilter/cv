// 函数声明
// function add(x:number, y:number, z :number = 10):number{
//   if (typeof z === 'number'){
//     return x + y + z
//   } else{
//     return x + y
//   }
// }

// let result = add(1,2,1)

// 函数表达式
const add = function (x:number, y:number, z :number = 10): number{
  if (typeof z === 'number'){
    return x + y + z
  } else{
    return x + y
  }
}

const add2 : (x:number,y: number, z?: number) => number = add;

// 类型推论
let num = 123;
// num = 'aaa'