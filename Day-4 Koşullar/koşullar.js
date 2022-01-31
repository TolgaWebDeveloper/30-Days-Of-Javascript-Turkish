// Koşullar

//if nedir?
/* if bir ifadenin true dönmesi sonucunda girdiğimiz bir kod bloğunu yürütmesidir. yani ifade true ise şunu yap diyebiliriz */


let myName = "Tolga"

/* burda adımın tolgaya eşit olup olmadığını sordum ve cevap true olduğu için bana kod bloğunu döndürdü */
if (myName === "Tolga" /* burası durum kısmının girildiği kısım */) {
    console.log("Hoşgeldin Tolga") /* süslü parantezin içi ise kod bloğudur */
} 

let isStudent = true;

/* burda değişkenin değeri zaten boolean bir değer olduğu için ismini yazmam yeterli */
if (isStudent) {
    console.log("bu ifadenin true olması sonucunda ekrana getirilmiş bir yazıdır"); 
}
let age = 18

if (age < 15) {
    console.log("eğer ifade true değil yani yanlış ise bu işlemi reddeder ve ekrana yansıtmaz")
}

// else nedir ?
/* else ise ifadenin false dönmesi sonucunda kod bloğunu yürütmesidir. yani if koşulundaki ifade doğru değilse else döner*/

else {
   console.log("yukarıdaki ifadenin false olması durumunda else'deki kod bloğu çalışır") //else kendisine en yakın if'i alır yani else içine bir durum girilmesi gerekmez
}

// let isRaining = true

// if (isRaining) {
//     console.log("hava yağmurlu, şemsiyeni unutma!")
// }
// else{
//     console.log("hava güneşli, tadını çıkar")
// } // bu örnekte if içindeki kod bloğu döner 

// let result = Number(prompt("2 + 5 kaç yapar?, 2 + 5"))

// if (result === 7){
//     alert("doğru cevap, tebrikler")
// }
// else {
//     alert("yanlış! cevap 7 olacaktı")
// }

//else if nedir?
/* else if birden fazla koşul girmek için kullanılır. */

let number = 5

if (number === 4) {
    console.log("number 4'e eşitse burası döner")
}

else if (number >= 5) {
    console.log("number 5'ten büyük veya eşitse burası döner")
}

else if (number > 5) {
    console.log("number 5'ten büyükse burası döner")
}

else {
    console.log("hiçbirisi doğru değilse burası döner")
}

/* not: koşulların hepsi true ise ilk koşula bakar */

//switch nedir? 
/* yukarıda birden fazla koşul girmek için "if,else if,else if,else" anahtar kelimelerini kullandık fakat daha temiz ve okunaklı bir kod istersek bunu alternatifi olarak switch anahtar kelimesini kullanabiliriz */

let weather = "bulutlu"

switch (weather /*burası durumun değerinin girildiği kısım */) {
    /* burda case'lere çeşitli durumlar atadık ve durumların gerçekleşmesi halinde bize içindeki kodu çalıştıracaktır. yani case burda if görevini gördü*/

    /* break ise koşulumuz yerine geldiğinde diğer koşulları görmemesini sağlamaktır. yoksa sistemin kafası karışacak ve bir koşul gerçekleştiğinde diğer kodlarıda onun ifadesi zannedip break görene kadar o kodlarıda çalıştıracaktır*/
    case "yağmurlu" :
        console.log("bugün hava yağmurlu")
    break;
    
    case "bulutlu" : 
         console.log("bugün hava bulutlu")
    break;
    
    case "güneşli" :
        console.log("bugün hava güneşli");
    break;
    
    /* default ise else ile aynı durumu görmektedir. koşullardan hiçbirisi sağlanmadıysa bu kodu çalıştıracaktır*/
    default: 
    console.log("bilinmiyor");
}

/* yukarıda yaptığımız bir örneği switch ile yapalım */

// let result = Number(prompt("2 + 5 kaç yapar?, 2 + 5"))

// switch (result) {
//     case 7:
//         console.log("doğru cevap - switch");
//     break;
//     default:
//         console.log("yanlış cevap - switch");    
// }

/* burda durum değeri kısmına bu sefer true yazdık. bunun sebebi switch durum değerine göre hareket ettiği için koşullarda true değerini arayıp karşılayan varsa onu sunar. tabi bu kısma num yazsakda olurdu hatta daha doğru olurdu. */

let num = 5
switch (true) {
    case num == 5:
        console.log("doğru cevap")
    break;
    
    default:
        console.log("yanlış cevap");    
}

/* burda ise sonucu false olanı aradı */
switch (false) {
    case num == 5:
        console.log("doğru cevap")
    break;
    
    default:
        console.log("yanlış cevap");  
}
