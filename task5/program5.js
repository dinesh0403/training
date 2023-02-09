function Anagram(a, b) {
    let string1 = a.split('');
    string1 = string1.sort();
    string1= string1.join('');
    let string2 = b.split('');
    string2 = string2.sort();
    string2= string2.join('');
    if(string1 === string2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 Anagram("mary","army")