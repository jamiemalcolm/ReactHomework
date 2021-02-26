const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
console.log(names);

// const fred = names[0];
// const kate = names[1];
// is the same as 
// const [fred, kate] = names;
// can skip over names we dont want by const [name, name, , name] = names
const [fred, kate, ...remainingNames] = names;
console.log(remainingNames);


const person = {
  name: "Joni", 
  age: 76,
}
const { name, age } = person;
console.log(name);
console.log(age);