const myObject = {
  property: "Value!",
  otherProperty: 77,
  "obnoxious property": function () {
    // do stuff!
  }
};

// dot notation
myObject.property; // 'Value!'
console.log("myObject.property: ", myObject.property);

// bracket notation
myObject["obnoxious property"]; // [Function]
console.log("myObject['obnoxious property']: ", myObject["obnoxious property"]);

//Object Constructor
function person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
}

const person1 = new person("John", 20);
const person2 = new person("Sara", 25);

person1.sayHello(); // Hello, my name is John
person2.sayHello(); // Hello, my name is Sara
