var q = [1,2];

q.push(3);
q.push(4);
q.push(5);

console.log("The queue is: ", q);
var element = q.shift();
console.log("Removed element is: ", element);

console.log("The current queue is: ", q);