// public 公用随便访问
// private 私有只能在类中使用，子类不可访问
// protected 私有，但子类可以访问
// readonly 只读，不可修改
class Animal {
  public name: string;
  static categoies: string[] = ['mammal','bird']
  static isAnimal( a:any ){
    return a instanceof Animal
  }
  constructor(name : string){
    this.name = name
  }
  run () {
    return `${this.name} is running`
  }
}

console.log(Animal.categoies);
const panda = new Animal ('panda')
console.log(Animal.isAnimal(panda))


class Dog extends Animal {
  bark(){
    return `${this.name} is barking`
  }
}

const newPanda = new Dog('newPanda');
// console.log(newPanda.run());
// console.log(newPanda.bark());

class Cat extends Animal {
  constructor( name : string ){
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run();
  }
}
const xiaobai = new Cat('xiaobai');
// console.log(xiaobai.run());


interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus();
}

interface ReadioWithBattery extends Radio {
  checkBatteryStatus();
}

class Car implements Radio{
  switchRadio(){

  }
}

class CellPhone implements ReadioWithBattery {
  switchRadio(){

  }
  checkBatteryStatus() {
    
  }
}