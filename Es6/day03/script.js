let trackName = "OS";

function add(x, y) {
	return x + y;
}

function square(x) {
	return x + x;
}

export default function sayHello() {
	console.log("Hello OS ");
}
export { add, square, trackName };
