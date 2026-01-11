// advanced js -- function constructor -- prototype
// iterable

// let x = new Object(); // let x = {}
// console.log(x);
// console.log(x.__proto__ == Object.prototype);
// // i -- value
// for (let value of arr) {
// 	console.log(value);
// }
// for -- in , i represent index
// for (let i in arr) {
// 	console.log(i); // index
// 	console.log(arr[i]);
// }
// console.log("--------------------------");
// // not iterable
// let person = {
// 	fname: "alaa",
// 	age: 20,
// 	address: "alex",
// };
// for -- of --
// for (let i of person) {
// 	console.log(i);
// }

// i key , can get value
// for (let i in person) {
// 	// console.log(i); // key
// 	// console.log(person.i);
// 	console.log(person[i]);
// }
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// console.log(arr);
// console.log("--------------------------------");
// let x = Symbol("id"); // generate for a unique value

// let y = Symbol("id");

// console.log(x == y);
// console.log(x); // symbol

// console.log(y);

// let x = Symbol();

// let product = {
// 	name: "Book",
// 	[Symbol()]: 300,
// 	[x]: function () {
// 		return {
// 			next: function () {
// 				return { value: "os", done: false };
// 			},
// 		};
// 	},
// };

// let obj = product[x]();

// console.log(obj.next());
// console.log(product[x]);

// let values = Object.keys(product);

// console.log(values);

// iterator
// function generateEvenNumbers() {
// 	// code override
// 	let step = 0;
// 	return {
// 		next: function () {
// 			if (step >= 10) {
// 				return { value: undefined, done: true };
// 			} else {
// 				return { value: (step += 2), done: false };
// 			}
// 		},
// 	};
// }

// generator function
// function* getEven() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }
// get values -- non iterable object

// function* getObjValues() {
// 	// values
// 	for (let key in this) {
// 		yield `{key:${key},value:${this[key]}}`;
// 	}
// }

// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	address: "alex",
// };

// true
// person[Symbol.iterator] = getObjValues;
// // person[Symbol.iterator] = getEven;
// for (let i of person) {
// 	console.log(i);
// }
// let iterable = getObjValues();

// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());

// let person = {
// 	fname: "Ali",
// 	age: 20,
// 	address: "alex",
// };
// non iterable object to iterable object
// person[Symbol.iterator] = generateEvenNumbers;
// // console.log(person);
// //
// for (let i of person) {
// 	console.log(i);
// }
// arr[Symbol.iterator] = generateEvenNumbers; // override

// values --
// for (let i of arr) {
// 	console.log(i);
// }
// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * key = Symbol.iterator
 * == function
 * --------------------------
 * 1- fun return {}
 * 2- {} has next key
 * 3- next key values is a function
 * 4- next function -- return {value,done}
 *
 */
// let arr = ["mona", "ahmed", "hoda"];

// // code value --
// arr[Symbol.iterator] = function () {
// 	let count = 0;

// 	return {
// 		next: () => {
// 			if (count < this.length) {
// 				return { value: this[count++], done: false };
// 			} else {
// 				return { value: undefined, done: true };
// 			}
// 		},
// 	};
// };

// for (let value of arr) {
// 	console.log(value);
// }
// let product1 = {
// 	id: "1",
// 	name: "Book",
// 	price: 200,
//     category: "school",

// };
// let product2 = {
// 	id: "2",
// 	name: "Book",
// };
// let product3 = {
// 	id: "3",
// };
// class Product {
// 	constructor(id = "", name = "", price = 1) {
// 		this.id = id; //
// 		this.name = name;
// 		this.price = price;
// 	}
// 	discount(rate) {
// 		return this.price * rate;
// 	}
// }

// let p1 = new Product(1, "Book", 200);
// let p2 = new Product(2, "Pen", 400);
// let p3 = new Product(3, "Watch", 500);

// console.log(p1);
// console.log(p2);
// console.log(p3);

// function Product(id = "", name = "", price = "") {
// 	this.id = id;
// 	this.nam = name;
// 	this.price = price;
// 	//
// }

// Product.prototype.discount = function () {
// 	console.log(this.discount);
// };
// let p1 = new Product(1, "Book", 200);
// console.log(p1);

// subClass - childClass
// class User extends Person {
// 	constructor(id, name, age, password) {
// 		super(id, name, age);
// 		this.password = password;
// 	}

// 	generatePassword() {
// 		return this.password.toUpperCase() + "@#$$";
// 	}
// 	// override -- polymorphism
// 	display() {
// 		super.display();
// 		console.log("Password :", this.password);
// 	}
// }

// let myUser = new User(1, "Ali", "20", "pet");

// myUser.display();
// console.log(myUser.generatePassword());
// parenet class - superclass
// class Person {
// 	#id;
// 	constructor(id, name, age) {
// 		this.#id = id;
// 		this.name = name;
// 		this.age = age;
// 	}

// 	display() {
// 		console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
// 	}
// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let p1 = new Person(1, "Book", 300);

// p1.setId = "new Id"; // set
// console.log(p1.getId); // get
// p1.setId("new id y os"); // get
// console.log(p1.getId()); // set
// p1.id = "new ID"; // public
// console.log(p1.#id); //
// class Person {
// 	constructor(id, name, age) {
// 		if (this.constructor == Person) {
// 			throw new Error("Can not take object from abstract class");
// 		}
// 		this.id = id;
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display() {
// 		throw new Error("Method not implemented");
// 	}
// }

// class User extends Person {
// 	constructor() {
// 		super();
// 	}
// 	display() {
// 		console.log("Welcome new user");
// 	}
// }

// let u = new User();
// u.display();

// search static method -- varaible (static)
