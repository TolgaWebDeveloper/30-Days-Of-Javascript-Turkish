/* string birleştirme */

/* string değerinde iki değeri "+" operatörü ile birleştirebiliriz.*/

//normalde + operatörünü sayısal işlemleri toplarken gördük lakin aynı zamanda kelimeleri birleştirme özelliğide vardır
let name = "tolga";
let surname = "yalçın"

// fullname içine atadığımız boş değer kelimeler arasında boşluk bırakmak için kullanılır lakin bu yöntem önerilmez*/
let fullname = name +" "+ surname;

console.log(fullname);

let firstname = "tolga"
let lastname = "yalçın"
let age = 18
//önerilen space kullanımı
let space = " ";

/* normalde age değişkeni sayısal bir değer olduğu için toplama yapması lazımdı lakin yanında string bir ifade olduğunu bildiği için sayıyı yanına ekledi */
console.log(firstname, space, lastname, space, age,)


let paragraph = "diyelim ki bu uzun bir text yazısıdır. biz yazıyı düz yazabiliriz ama alt satırdan devam etmek istediğimizde bize hata verir çünkü satır dolmadan ak-lt satıra geçmek istediğimizde yeni değişken bekler. bu durumda \
işaretini kullanırız ve bu şekilde daha okunaklı bir yazı elde edebiliriz.kısaca yeni \
bir satıra geçmemizi sağlar. tabi bunlar konsolda görünmez ve satır sonuna kadar yazı devam eder.tabi bu \
işaretinin çeşitleri var onlara bakalım" 

console.log(paragraph)

// "\" çeşitleri 

// "\n" işareti yeni satıra geçer ve konsolda da görünür

let biography = "benim\n adım\n tolga\n ve\n bu\n ders\n notlarımı\n size\n aktarıyorum"

console.log(biography)// konsolda yazdığım kelimeler alt alta gelecektir

// "\t" işareti tab tuşuna bastığımızda oluşan 8 tane boşluğu koyar. tab a neden basmıyoruz dersek editörde yaptığımız konsolda görünmez :)

let text = "bu \t arasında \t 8 boşluk \t olan \t text \t yazısıdır"

console.log(text)// konsola boşluklar tanımlandı

// "\\" ise karakterler arasına "\" işaretini koyar

let backSlash = "iki\\kelime"

console.log(backSlash) // konsolda kelimenin arasında 1 tane "\" olur

// "\'" ve '\"' işareti kelimenin arasına "" veya '' işaretlerini koymamızı sağlar

let deneme1 = " çift tırnak ile açtığımız yazı'yı tek tırnak ile ayırabiliriz " + 'ya da tek tırnak ile açtığımız yazı"yı çift tırnak ile ayırabiliriz'

//ama

// let deneme2 = "çift tırnak ile açtığımızda tekrar"bunu kullanamayız çünkü hata verir" bu yüzden;

let deneme2 = "bu ifade\"ye bu şekilde çift tırnak verebiliriz"

console.log(deneme2) //konsolda bu ifade"ye olarak görünür

// ${} işareti

/* bu işaret string bir değerin içine başka bir değer eklemek veya başka türden bir değer eklemek istediğimde kullanılır. örneğin;*/

//not: bu özellik `` işaretinde aktif olur. windows'ta alt gr + , kombinasyonuyla yapabilirsiniz

let oneName = "tolga"

let twoName = "yalçın"

// göründüğü gibi soyadımı bu değişken içine yazdım ve bu şekilde birleştirme yaptım
let fullName = `tolga ${twoName}` 

console.log(fullName)

//diğer örnek

let Name = "ayşe";
let Age = 21 ;

let NameAndAge = `ayşe ${Age}

burda boşluk bırakabiliyoruz ve bu boşluk konsolda görünür

turkey

`

console.log(NameAndAge) /* göründüğü gibi hem birleştirme yaptık, hem sayı olan bir değeri strings'e dönüştürdük hemde boşluk bırakmak için ek sembollere gerek duymadık . sayıları da toplayabiliriz lakin sonuç string bir değer olarak ortaya çıkar*/

let a = 10;
let b = 15;

let result = `

${a} + ${b} = ${a + b}

`

console.log(result)

