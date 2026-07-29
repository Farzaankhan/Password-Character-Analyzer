 
let pass = prompt("enter the pass");

let upper =0;
let lower =0;
let number =0;
let vowels =0;
let sign = 0;

for (let a of pass) {
    if (a >="A" && a <= "Z") {
        upper++;
    } else if (a >="a" && a <= "z"){
        lower++;
    } else if(a>="0" && a<="9"){
        number++;
    } else{
      console.log("wrong");
      
    }
    
    let vol =a.toLowerCase();
    if(
        vol === "a" ||
        vol === "e" ||
        vol === "i" ||
        vol === "o" ||
        vol === "u"
    ){
        vowels++;
    }


     let  pas =a.toString();
    if(
        pas === "#" ||
        pas === "$" ||
        pas === "&" ||
        pas === "%" ||
        pas ===  "@"
    ){
        sign++;
    }
}
console.log("upper case",upper,"lower case",lower,"number",number,"vowel",vowels,"sign",sign);
