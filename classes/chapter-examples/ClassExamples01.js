//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
//Try modifying or adding properties below.

fox.age = 9;
console.log(fox.age);

fox.color = 'red';
console.log(fox.color);

fox.speak = function(){
  console.log('Hello, I am ' + this.name);
};
fox.speak();
