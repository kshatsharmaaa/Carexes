
class Animal { // structure thats reusable
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType() {
    console.log("Animal");
  }
  describe() { // function
    return `${this.name} has ${this.legCount} legs`
  }
}

let dog = new Animal("dog", 4); // dog is of type Animal(ds) // create object
console.log(dog.describe()); // call function on object

// we can also have static funcs which arent associated to obj, these are associated to class itself
console.log(Animal.myType());
// where as Aniimal.speak() will give error as it can be used through objects only

