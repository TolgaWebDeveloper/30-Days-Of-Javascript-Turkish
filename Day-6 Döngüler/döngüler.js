// Döngüler

/* döngüler bir kod bloğunu veya bir komutu birden fazla tekrarlamak istediğimizde bunu daha kolay ve temzi yapmamızı sağlayan özelliklerdir. örneğin bir konsol'a aynı ismi birden fazla döndüreceğimiz zaman bunu kopyala yapıştır ile yapmaktansa döngülerle yapmak çok kolay. */

//for döngüsü
/* for döngüsü döngü çeşitlerinden birisidir nasıl kullanıldığına bakalım */

//for syntax (ilk atama; döngü çalıştırma şartı; her döngü sonrası ne olacak){kod bloğu}

/* burda döngüye bir değer atadık ve bu değerin 5'ten küçük olduğu sürece dönmesini istedik fakat sonsuz döngüye girmemesi için her döngüde i'ye bir arttırmasını söyledik */
for (let i = 0; i < 5; i++) {
    console.log("for ile bu yazıyı konsola 5 kere yazdırdım", i)
} /* bu yazı konsola 5 kere yazdırıldı */

//for ile döndürerek matematik işlemini yapabiliriz. örneğin 9'lar çarpım tablosu yapalım

for (let i = 1, j = 9; i <= 10; i++) {
    console.log(`${j} * ${i} = ${j * i}`)
} /* burda let ile iki değişken tanımladık. 9'ları yaptığımız için 9'u sabit bıraktık ve i'yi 10'dan küçük ve 10'a eşit olana kadar arttırdım. her döngüye girdiğinde bana i'yi j'ile teker teker çarptı ve i 10'a geldiğinde döngü durdu */

//for'un diziler ile kullanımını görelim 

let names = ["tolga", "umut", "abdullah", "mehmet"]

// yukarıda bir dizimiz var burdaki her elemanı for kullanmadan çağırırsak;

// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3]) // şeklinde çağırdık 

//for kullanarak çağıralım

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
} /* bu şekilde i'ye 0 değerini atadık ve i dizideki kelime sayısı kadar dönmesini söyledik.*/

//dizideki değerleri toplayalım

let num = [1, 3, 7, 14, 21]
let sum = 0

for (let i = 0; i < num.length; i++) {
    sum += num[i]
}

console.log("toplam " + sum); //cevabımız 46 döndü

// bir dizideki elemanı boş bir diziye atalım

const country = ["turkey", "cyprus", "azerbaijan"]
const newCountry = []

for (let k = 0; k < country.length; k++) {
    newCountry.push(country[k].toLocaleUpperCase("TR") /* toLocale ifadesi normal upper veya lowercaseden farklı olarak local'e göre büyütme yapıyor. mesela burda local ifadesi ekleyip tr yazarak türkçe karaktere uygun olarak büyütme yaptı ve büyütürken küçük i'yi I olarak değil İ olarak çevirdi*/ );
}

console.log(newCountry); // bu şekilde country'deki elemanı newCountry'e taşımış olduk 

/* yukarıda çeşitli olarak for'u kullandık. for'dan başka alternatiflerimiz var. bu alternatifler kullanım olarak farklı olsalarda hepsi neredeyse aynı işi yapıyor */

//while döngüsü 

let sayı = 0
/* burda yukarıda tanımlanmış bir değişkene göre döngüye soktuk. ve sonsuz döngüye girmemesi için kod bloğuna her döngüde değişkeni bir arttırmasını söyledik. yani for'daki işlemi farklı bir yöntemle yaptık */
while (sayı < 5) {
    console.log("bunu while kullanarak yazıyorum", sayı)
    sayı++
}

//do while

/* diğer döngülerde koşulun doğru olması halinde kod bloğunu yazdırıyor yani işlemi onaylıyorduk fakat burda döngü doğru ya da yanlış olsa bile ilk başta bu değeri bir kere yazdırıyor, eğer
döngü doğruysa ona göre yazdırmaya devam ediyor */
do {
    console.log("bunu do while kullanarak yazıyorum")

} while (sayı > 5); // burda döngü yanlış olduğu için sadece bir kere konsola yazdırıldı

//for of

/* for of özellikle diziler için kullanılan index([index bu oluyor]) belirtmek zorunda kalmadan o elemana ulaşmaya yarayan bir döngü */

for (let name of names) {
    console.log("ad :" + name)
} /* burda name değişkenine of kullanarak names dizilerini ekledik. bu şekilde dizilere ulaştı ve dizileri bize içindeki kelime sayısı kadar döndürdü. yani index numarası ile uğraşmadan elemanları çağırdık */

/* burda ise bir dizideki değerlerin hepsini birbiri ile çarpalım */
for (let num2 of num) {
    console.log(num2 * num2);
} // bize num içindeki değerlerin hepsini num2 ye atarak num2deki değerlerin hepsini kendisi ile çarptı. tabi bu döngüyü içindeki değerlerin sayısı kadar devam ettirdi

//break deyimi 

/* break deyimi türkçesiyle dur,kes gibi farklı anlamları var. burada ise döngüyü durdurmak yani sonlandırmak için kullanıyoruz */

for (let i = 0; i <= 15; i++) {

    if (i === 11) {
        break;
    }

    console.log("burda break kullanarak döngünün 10'da durmasını sağladım", i)
}

//contiune deyimi 

/* continue deyimi ise devam ettir anlamına gelmektedir. burdaki kullanımı ise örneğin 10.değere geldiğinde 10'u yazmadan sonrakine devam et anlamında kullanılabilir */

for (let i = 0; i < 16; i++) {
    if (i === 10) {
        console.log("burda ise continue kullanarak değer 10'a geldiğinde 10'u yazdırmadan sonraki değeri görmesini sağladım")

        continue;
    }

    console.log("continue kullanımı" + i)
}

// yukarıdaki işlemi continue kullanmadan denersek

for (let i = 0; i < 16; i++) {
    if (i === 10) {
        console.log("continue kullanmadığımız zaman 10'a geldiğinde bu yazıyı yazdırır ve 10'u aşağıda tekrar yazdırarak devam eder.")
    }

    console.log("continue kullanımı" + i)
}