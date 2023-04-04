// Creating Buffers: Followings are the different ways to create buffers in Node.js:

// 1]. Create an uninitiated buffer: It creates the uninitiated buffer of given size.
// Syntax:
var ubuf = Buffer.alloc(5);
console.log("ubuf", ubuf); //ubuf <Buffer 00 00 00 00 00>
// The above syntax is used to create an uninitiated buffer of 5 octets.

// 2].Create a buffer from array: It creates the buffer from given array.
// Syntax:

var abuf = new Buffer([16, 32, 48, 64]);
console.log("abuf", abuf); //abuf <Buffer 10 20 30 40>
// The above syntax is used to create a buffer from given array.

// 3]. Create a buffer from string: It creates buffer from given string with optional encoding.
// Syntax:

var sbuf = new Buffer("GeeksforGeeks", "ascii");
console.log("sbuf", sbuf); //sbuf <Buffer 47 65 65 6b 73 66 6f 72 47 65 65 6b 73>

// The above syntax is used to create a Buffer from a string and encoding type can also be specified optionally.
