interface IPerson {
  readonly id : number;
  name : string;
  age : number;
  address? : string;
}
let vince : IPerson = {
  id : 1015,
  name : 'vince',
  age: 35
}
// vince.id = 1207;

// readonly 用于属性（只读）
// const 用于变量（常亮）

