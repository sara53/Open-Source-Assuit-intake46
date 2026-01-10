// // request 1 callback hell
// let products;
// setTimeout(() => {
// 	products = [100, 200, 300];
// 	// request 2
// 	let product;

// 	setTimeout(() => {
// 		product = {
// 			id: products[0],
// 			name: "Book",
// 			price: 200,
// 		};
// 		console.log(product);
// 		// reques 3
// 		let price;

// 		setTimeout(() => {
// 			price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

// function greet(myFun) {
// 	myFun(
// 		function () {
// 			console.log("cb1");
// 		},
// 		function () {
// 			console.log("cb2");
// 		}
// 	);
// }

// greet(function (x, y) {
// 	x();
// 	y();
// });
///////////////////////////////

function getProductsId() {
	let myPromise = new Promise(function (x, y) {
		let products;

		products = [100, 200, 300];
		if (products) {
			x(products);
		} else {
			y("Error on getting products list");
		}
	});

	return myPromise;
}

function getProductDetails(productId) {
	return new Promise((resolve, reject) => {
		let product = {
			id: productId,
			name: "book",
			price: 300,
		};
		product ? resolve(product) : reject("Error on product details");
	});
}

function getPrice(product) {
	return new Promise((resolve, reject) => {
		let price = product.price;
		price ? resolve(price) : reject("Error on getting price");
	});
}
//

// async function execute() {
// 	try {
// 		let products = await getProductsId();
// 		let product = await getProductDetails(products[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getProductsId()
// 	.then((products) => {
// 		return getProductDetails(products[0]);
// 	})
// 	.then((product) => {
// 		console.log(product);
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// async function getUsers() {
// 	try {
// 		let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		let data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error); // logs
// 	}
// }

// getUsers();

// async function getData() {
// 	return "OS";
// }

// let result = getData();

// result.then(console.log).catch(console.log);
