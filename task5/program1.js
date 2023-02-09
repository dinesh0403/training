var input = "welcome to this javascript guide!";
const array = input.split(" ");
var output2="";
for(var i = 0; i < array.length;i++){
    var split = array[i];
    var split2 = split.split("");
    var output= split2.reverse();
    
    output2=output2+" "+output.join("");
}
console.log(output2);