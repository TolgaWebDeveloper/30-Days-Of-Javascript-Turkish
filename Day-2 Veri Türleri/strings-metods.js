// string metodları

/* string metodları string değerler için kullanacağımız bazı yardımcı özelliklerdir */

// leght metodu

/* leght metodu yazılan değerin karakter sayısını yani karakter uzunluğunu hesaplar */

console.log("merhaba".length) //merhaba'nın 7 karakter(harf)'den oluştuğunu belirtti

// Karakter seçme

/* dizilerde karakterlerin 0'dan başladığını ve istediğimiz karakteri seçmeyi göstermiştik aynı yöntem stringde de kullanılıyor */

let karakter = "merhaba"


console.log(karakter[2]); //konsolda programlama diline göre 2.karakter olan "r" yazıldı.

/*en son karakter ise leght-1 yani uzunluktan 1 çıkarırsak en sondaki karaktere ulaşırız */

let index = "merhaba".length-1;

console.log(index) // bize sonuç olarak 6 değeri geldi. peki biz konsola o 6.değeri nasıl yansıtıcaz

console.log("merhaba"[index]) // konsola 6.değer yani a değeri geldi


//büyük harfe çevirme (UpperCase)

console.log("merhaba".toUpperCase()) // bu şekilde MERHABA olarak konsola geldi

//küçük harfe çevirme (LowerCase)

console.log("MERHABA".toLowerCase()) // bu şekilde merhaba olarak konsola geldi

//substring 

/* substring bizim için cümlede sadece istediğimiz alanı seçer ve diğerlerini cümleden çıkarır */

let cümle = "merhaba dünya"

console.log(cümle.substring(7,13)) // burda 7.karakterden 13.karaktere kadar olan dünya yazısını aldık

//slice 

/*slice ise substring alternatifidir. aynı işi yapar */

console.log(cümle.slice(7)) // burda sadece tek bir değer verirsek o değerden bitişe kadar olan kelimeyi alır. bu şekilde dünya yazısnı aldık


//split

/* split karakterleri bölmeye yarar ve dizi oluşturur */

console.log("deneme split".split(' ')) // konsolda 2 kelimelik dizi olarak görünür. ' ' içine boşluk bırakırsak boşluktan böler

console.log("deneme split".split('')) // '' arasına boşluk koymazsak harfleri böler 12 tane dizi oluşturur

// trim 

/* trim kelimedeki boşlukları kaldırmaya yarar */

let string = "      boşluk deneme        "

console.log(string.trim()) // yazının sağ ve solundaki boşluklar kaybolur

//includes

/*includes kelimeyi cümlenin içinde arar*/

let sentence = "bu cümlenin içinde lütuf kelimesi vardır"

console.log(sentence.includes("lütuf")) // cevap true döndü
console.log(sentence.includes("zülüf")) // cevap false döndü

//replace

/*replace değiştir anlamına gelmektedir.değişkendeki seçtiğimiz değeri değiştirir*/

let sampleText = "30 Günde javascript"

console.log(sampleText.replace("30", "10")) // konsola 10 günde javascript olarak yansıdı. burda 30 değerini 10 değerine döndürmesini söyledik

//repleceAll ise içindeki tüm kelimeleri değiştirir

let sampleText2 = "Değirmen iki taştan, muhabbet iki baştan"

console.log(sampleText2.replaceAll("iki","bir")) // burda isi iki geçen bütün kelimeleri değiştirdi

//indexOf

/*indexof kelimenin hangi karakter sayısından başladığını gösterir*/

let sampleText3 = "30 Günde Javascript"

console.log(sampleText3.indexOf("J")) // burda "j" harfinin 9.sırada olduğunu gösterdi
console.log(sampleText3.indexOf("Gün")) // burda "Gün" kelimesini aradığımızda 3.sıradan başladığını gösterdi /* not: boşluklarda karakter sayıldığı için sayılırken onlarda hesaplanır ve sonuç ona göre olur */

//lastindexOf

/* lastindexOf ise saymaya sondan başlar */

//endsWith

/* endsWith değer şu kelimeyle bitiyor mu diye sorar ve boolean bir değer döndürür */

let sampleText4 = "ben sana gül demem, gülün ömrü az olur"

console.log(sampleText4.endsWith("olur"))// konsola true değeri döndü

//startsWith

/* endsWith'in tersi olarak değer şu kelimeyle başlıyor mu diye sorar */

console.log(sampleText4.startsWith("olur")) //konsola false değeri döndü

//repeat

/* repeat string'i tekrarlayarak konsola döndürmemizi sağlıyor */

console.log(sampleText4.repeat(10)) // yukarıda tanımladığımız değişkeni 10 kere döndür dedik ve cümle 10 kere döndü. bunu bir harf ya da kelime için yapabilirsiniz


