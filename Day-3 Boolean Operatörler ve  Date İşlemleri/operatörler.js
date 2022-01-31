//Operatörler

//Atama Operatörleri

/* atama operatörleri değer atarken arttırma azaltma gibi dört işlem yapabileceğimiz özelliktir */

let val 

let a = 5
let b = 15
let c = "5"

val = a // bu şekilde a değerini atadık
val += a // burda ise yukarıda tanımladığımız val değerine a sayısını daha ekledik. yani val = (val + a) yapmış olduk ve sonucunu 10 bulduk 
val -= a // burda ise val değerinden a'yı çıkardık ve yine 5 bulduk
val *= a // burda ise val ile a'yı çıkardık ve 25 bulduk
val /=a //burda ise val değerinden a yı böldük ve 5 bulduk

//Aritmetik Operatörler

/* aritmtik operatörler js nin matematik işlerini barındıran kısım */

val = a + b //burda a ile b yi topladık
val = a - b //burda a ile b yi çıkardık
val = a * b //burda a ile b yi çarptık
val = b / a //burda b ile a yı böldük
val = b % a //burda b ile a'nın modunu aldık 
val = b ** a //burda b nin a üssünü aldık 

//Karşılaştırma Operatörleri

/* karşılaştırma operatörleri hem değerleri hemde değerlerin veri türünün eşitliklerini, büyük küçüklerini ve olumsuzlarını karşılaştırdığımız kısımdır. burda sonuç ya true ya da false döner */

/* değerleri karşılaştırmak için çift "=" kullanılır */
val = a == c //true döner çünkü ikiside aynı rakamdır
val = a === c //burda false döndü çünkü değerler aynı fakat türleri farklı. biri string iken biri number
val = a > b //false döndü çünkü a b'den büyük değildir
val = a < b //true döndü çünkü a b'den küçüktür
val = a <= c //true döndü çünkü a c'den küçük değil ama eşit
/* değil mi sorusunu sormak için yani olumsuzunu almak için "!" işareti kullanılır */
val = a >! b //true döndü çünkü a b'den büyük değil
val = a != c //false döndü çünkü a c'ye eşit 
val = a !== c //true döndü çünkü a c'ye eşit ama türleri farklı

//Mantıksal Operatörler

// && (and) operatörü

/* and operatörü şu değer ve bu değer böyle mi diye sorar eğer iki değer de doğruysa true döner ama iki değerden biri yanlışsa false döner */

// true && true = true
// true && false = false
// false && false = false

val = a==c && a>b // burda a'c ye eşit mi ve a b'den büyük mü dedik ilk değer doğru ikinci değer yanlış olduğu için false döndü 
val = a==c && a<b // cevap true döndü çümkü iki değerde doğru 

// || (or) operatörü

/* or operatörü veya sorusu sorar */

//true || true = true
//true || false = true
//false || false = false

val = a==b || b>a // cevap true döndü çünkü ilk değer yanlış ama diğer değer doğru

//Arttırma operatörü 

/* arttırma operatörü sayıya bir arttır veya bir azalt komutunu verdiğimiz kısım */

//2 çeşit arttırma operatörü var

let count = 0

//1.kullanım
console.log(count++) //burda count sayısını bir arttır komutunu verdik ama sayı artmadı. bunun sebebi "++" işaretini sona koyduğumuzda o değişken bir sonraki kullanımda artar
console.log(count) // artmış olarak 1 değeri geldi

//2.kullanım
console.log(++count) //burda ise sayı hemen 2 oldu. (1 değerini yukarıda vermiştik) çünkü "++" ifadesini başa alınca hemen yap konutunu verir o anda sayı artar

// bu kullanımları "--" ile azaltmak içinde kullanabilirsiniz

//Ternary (üçlü) Operatör

/* ternary operatörü benim deyişimle koşullu operatör. bu konu koşullar başlığında aydınlanacaktır diye umuyorum ama ön bilgi açısından bakalım */

let isRaining = true //burda yağmur yağıyor mu diye bir değişken atadık ve evet değerini verdik. burda koşullar devreye giriyor. yani cevap ne gelirse ona göre hareket edecek

isRaining 
  ? console.log("evet yagmur yağıyor") //burda "?" işareti ile true gelirse bu değeri konsola yazdırmasını söyledik
  : console.log("hayır yagmur yağmıyor") //burda ":" işareti ile false gelirse bunu yazdırmasını söyledik

//ekrana true olduğu için ilk komut geldi