/*Değişkenler*/

// Anahtar kelimeler: var, let, const

/* var ve let aynı özelliklere sahiptir. let ilerde değişebilecek değişkenler için kullanılır*/

let email="abc@gmail.com";

email="def@gmail.com";

console.log(email); // konsola en son güncellenen değer yazıldı

/*const ise ileride değiştirilmeyecek olan değişkenler için kullanılır*/

const country="Gaziantep";

// country="İzmir" /*bu şekil kullanıldığında konsola yansıtılmayacak ve hata mesajı gelecektir*/

console.log(country);

/*Değişken Kuralları*/

// 1-Değişken sayı ile başlayamaz

// let 1satır /*yanlış kullanım*/

let satır1; /*veya*/ let _1satır; /*doğru kullanım*/

// 2-Değişken tanımlanırken "$" ve "_" özel sembolleri hariç özel sembol kullanılamaz. kelimeler arası boşlukta bırakılamaz

// let ilk.cümle /*yanlış kullanım*/

//let ilk cümle /*yanlış kullanım*/

let ilk_cümle; /*veya*/ let $ilkcümle; /*doğru kullanım*/

// 3-(*tercihen) değişken tanımlarken ilk kelimenin ilk harfini küçük yazın, sonraki kelimelerin ilk harflerini büyük yazın

let firstName;
let getLastName;

/*Değişken Söz Dizimi (Variables syntax)*/

let değişkenAdı="değişken değeri";

// örneğin;

let authorFirstName="Tolga",
    authorLastName="Yalçın",
    authorAge=18,
    authorİsTheStudent=true,
    authorMoney=null,
    authorCountry=undefined;

const GRAVITY = 9.81
const PI = 3.14  

console.log( GRAVITY, PI, authorFirstName, authorLastName, authorAge, authorİsTheStudent, authorMoney, authorCountry);