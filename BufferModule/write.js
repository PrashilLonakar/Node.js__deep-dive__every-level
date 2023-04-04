// Writing to Buffers in Node.js: The buf.write() method is used to write data into a node buffer.
// Syntax:

//buf.write(string, offset, length, encoding);

// The buf.write() method is used to return the number of octets in which string is written. If buffer does not have enough space to fit the entire string, it will write a part of the string.
// The buf.write() method accepts the following parameters:

// string: It specifies the string data which is to be written into the buffer.
// offset: It specifies the index at which buffer starts writing. Its default value is 0.
// length: It specifies the number of bytes to write. Its default value is buffer.length.
// encoding: It specifies the encoding mechanism. Its default value is ‘utf-8’.

// Example: Create a buffer.js file containing the following codes.

// Write JavaScript code here
cbuf = new Buffer(256);
bufferlen = cbuf.write("Learn Programming with GeeksforGeeks!!!");
console.log("No. of Octets in which string is written : " + bufferlen);
