// Methods

const Rabbit = {
  speak(type) {
    return `${ type } rabbit is speaking!!`;
  }
};

console.log(Rabbit.speak("Black"));
console.log(Rabbit.speak("White"));

// Prototypes

console.log(Object.getPrototypeOf(Rabbit.speak) === Function.prototype)

class Mammal {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this._name = this.firstName + " " + this.lastName;
  }

  speak(text) {
    return `${ this._name } says ${ text }`;
  }

  static getDate() {
    return new Date;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const dog = new Mammal("Bingo", "Jackie", 2);
dog.name = "Jackie";
console.log(dog.speak("Hello world"));

console.log(Mammal.getDate());
console.log(dog.name);


class Human extends Mammal {
  constructor(firstName, lastName, age, height, email = null) {
    super(firstName, lastName, age);
    this.height = height;
    this.email = email;
  }
}

const human = new Human("Gabriel", "Michael", 12, 5.5);

console.log(human.name);