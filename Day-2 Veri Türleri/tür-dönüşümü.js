// Tür Dönüşümü

/* tür dönüşümü değerin türünü değiştirmek için kullanılır. örneğin bir sayıyı string olarak yazdıysak onu number'a ya da number bir ifadeyi string'e dönüştürebiliriz */

//String to Number

let num = "10"// bu şekilde yazdığımızda 10 sayısı string olarak görünür

//1.yöntem

let number = Number(num);

console.log(typeof number); //bu şekilde number'a çeviririz ki bu kolay yöntem

//2.yöntem

let num1 = parseInt("10.5"); // parseInt ile çevirdiğimiz zaman tam sayı olarak verir yani noktadan sonraki değere bakmaz
num1 = parseFloat("10.5") //parseFloat ise ondalık sayı olarak verir.

console.log(num1)
console.log(typeof num1) // bu şekilde number'a çevirebiliriz

// Number to String 

let numToString = 10; // 10 sayısı burda number. peki string değere nasıl dönüştürelim

//1.yöntem
numToString = String(10);// bu şekilde string olarak görünür

//2.yöntem
numToString = 10 .toString();

console.log(typeof numToString);

/* bu şekilde boolean ve diğer türleri de yapabilirsiniz. tabi yine de araştırmakta fayda var :) */