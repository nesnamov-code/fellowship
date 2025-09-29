// реализация задачи разделения объекта на переменные без деструктуризации
const peter = {name: "Peter", age: 40, hobby: "coding"};

// const name = peter.name;
// const age = peter.age;
// const hobby = peter.hobby;



//! Деструктуризация объектов

const {name, hobby, age} = peter;

console.log(name);
console.log(age);
console.log(hobby);
