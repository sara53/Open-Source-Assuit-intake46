// import sayHello, { add, square } from "./script.js";

import * as all from "./script.js";

console.log(all.add(3, 4));
console.log(all.square(3));

all.default();

all.trackName = "PD"; // readonly;
console.log(all.trackName);
// export
// export naming
// export default

///////////////////////////////////////
// array == generator
// object == iterator
///////////////////////////////////////
