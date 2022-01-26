/* Veri Türlerini Karşılaştırma */

/* karşılaştırma ifadeleri iki değeri karşılaştırıp boolean olarak yani "true" ya da "false" olarak cevap verir. */
let numOne = 3;
let numTwo = 3;

/* iki tane "=" ile iki değişkenin değeri eşitmi diye bir soru sorarız ve eşitse "true" cevabını, değilse "false" cevabını alırız */
console.log(numOne == numTwo); // cevap true

let js = "javascript";
let py = "phyton";

console.log(js == py); //cevap false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff);// cevap false

// Non-Primitive Data Types (Object) 

/* Non primitive yani ilkel olmayan veri türleri değiştirilebilir ya da güncellenebilir diyelim. örneğin; */

//Arrays (Diziler)

/*diziler birden fazla değer girmek istediğimizde "[]" içinde değerleri girmemizi sağlar*/

// let numbers = [1, 2, 3, 4];

/*diziler sadece sayılar için değildir. başka değerler hatta başka türden değerlerin hepsini bir değişken içine verebiliriz*/

let numbers = [1, "merhaba", true, null, undefined];

/* biz bu değerleri değiştirebiliriz */

numbers = [1, 2, 3, 4]; 
/* dizilerde ilk eleman "0" dan başlar.2.eleman "1", 3.eleman "2" olarak gider*/
numbers[0] = "js" //1 yazan eleman konsolda js olarak değiştirildi

console.log(numbers);

/* Non primitive veri türleri primitive türler gibi birbiriyle karşılaştırılamaz. içeriği harfi harfine aynı olsa bile ekrana false değeri dönecektir. örneğin; */

let nums1 = [1,2,3,4];
let nums2 = [1,2,3,4];

console.log(nums1 == nums2); // cevap false çıktı
console.log([1,2,3,4] == [1,2,3,4]); // cevap yine false çıktı

let user1 = {
    name: "tolga",
    surname: "yalçın",
};

let user2 = {
    name: "tolga",
    surname: "yalçın",
};

console.log(user1 == user2); // cevap false 

/* cevabın false gelmesinin sebebi bunlar değerlerine göre değilde referanslarına göre karşılaştırılıyor. şöyle birşey yaparsak; */

let nums3 = [1,2,3,4];
let nums4 = nums3;

console.log(nums4 == nums3); // cevap true geldi