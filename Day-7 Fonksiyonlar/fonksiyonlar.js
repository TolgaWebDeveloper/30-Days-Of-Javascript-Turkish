// Fonksiyon kavramı

/* fonksiyonlar bir kodu farklı şekillerde birden fazla kullanacağımız zamanlarda kullanılmaktadır. örneğin bir yaş hesaplayacağımız bir fonksiyon tanımlarız ve fonskiyonun içine bir değer ismi tanımlarız.sonra bu değerlere ne olacağını belirler sonucu döndürmesini isteriz.*/

/* fonksiyonu function anahtar kelimesi ile kullanırız */

/* fonksiyonun kullanım amaçları:

1-temiz kod
2-kolay test etme
3-yeniden kullanılabilir 
  
*/

// bir fonksiyon farklı şekillerde tanımlanıyor. bunlar:

// Declaration Function

/* genelde kullanacağımız temel fonksiyon tanımlamadır */

function sayHello() {
    console.log("Bu yazı sayHello komutu çağırıldığında yazılacaktır");
} // bu kodun çalışması için komutumuzu çağıralım

sayHello() //burda komutumuzu çağırdık ve konsola fonksiyondaki kod bloğunun içindeki console.log komutu çalıştı

//fonksiyonlarda değer döndürme (return kavramı)

/* yukarıda boş bir değer alan fonksiyon oluşturduk ve sadece fonksiyonun adını çağırarak içindeki kodu çalıştırdık. ama fonksiyonun bazen bize bir değer döndürmesini isteriz. örneğin bir yaş hesaplama işlemi yuapacağız. her seferine yaş hesaplamak için değişkenler oluşturmak yerine tek bir fonksiyona yaş hesaplama özellikleri tanımlayabilir ve onu lazım oldukça kullanabiliriz. bu da bize hem temiz kod hem de yeniden kullanımı sağlar */

function yasHesapla(dogumYili) {
   return new Date().getFullYear() - dogumYili
} // burda fonksiyona dogumYili isminde bir değişken atadık ve aşağıda yaş hesaplama işlemi tanımladık. return ile bu işlemin sonucunu fonksiyon bize her çağırıldığında dönmesini istedik. böylece aldığımız bir veriyi kullanmış olduk ve artık bir yaş hesaplama fonksiyonumuz oldu.

console.log(yasHesapla(2003));//burda 2003 değerini girdik ve konsolda bize işlemin sonucu olan 19'u döndü

//not: veriyi prompt veya farklı bir yöntemle (DOM vs...) alabilirsiniz

//parametrelerle fonksiyon

/* yukarıdaki gibi parametrelerle fonksiyonlarda işlem yapabiliriz */

function multiply(num1,num2) {
    return num1 * num2
} //burda fonksiyona iki parametre girmesini ve girilen değerlerin çarpımının dönmesini istedik

let total = multiply(5,3) // burda iki parametreyi sonuç yani total isminde bir değişkene atadık

console.log(total);//konsola fonksiyonun sonucu olan 15 döndü

// Anonymous Function

/* anonim fonksiyonlar veya isimsiz fonksiyonlar bir değişkene tanımlanan fonksiyonlardır. yani parametre almadan değişkene atanır ve değişken her çağırıldığında fonksiyon çalışır*/

const anonymousFunction = function(){
    console.log("const ile atadığım değişkeni çağırdığımda bu fonksiyon çalışacaktır");
}

anonymousFunction()

// Expression Function 

/* expression fonksiyon ise anonim fonksiyonun parametre döndüren cinsidir */

const hello = function(name) {
    return `Hello ${name}`
}

console.log(hello("Tolga"));

// Kendi Kendini Çağıran Fonksiyon

(function () {
    console.log("Say Hello!");
})()// kendi kendini çağıran fonskiyonlar bu şekilde kullanılır. yani fonksiyon ismini girmek yerine parantezler içinde fonksiyon tanımlanıp parantezin sonuna boş bir parantez açıldığında fonksiyon kendi kendini çağırır

//fonksiyona parametre vererekte kullanabilirsiniz

const val = (function (n1,n2) {
    return n1 * n2 
})(2,3) //burda girdiğimiz parametreler olan 2 ve 3'ün çarpımını aldık ve sonucu görmek için val isimli değişkene atayıp konsolda çağırdık

console.log(val);

// Arrow Function 

/* arrow function fonksiyon yazmanın bir diğer alternatifidir. bu özellik ES6 ile birlikte gelmiştir ve ismini "=>" işaretinden yani ok işaretinden almıştır. bu seçeneği kullanmak için fonksiyonu bir değişkene atamamız gerek */

/* normal (regular) fonskiyon */

function hello1(name) {
    return `Hello ${name}`
}

/* arrow fonksiyon */

const hello2 = (name) =>{
    return `Hello ${name}`
}; //burda daha kısa ve basit bir şekilde fonskiyon atadık ve diğer yöntemle aynı görevi gördü

console.log(hello1("tolga"),hello2("yalçın"));

//not: eğer sadece bir satır fonskiyon yazacaksak süslü parantez kullanmadan fonksiyon yazabiliriz 

const hello3 = name => `Hello ${name}`

console.log(hello3("tolga"));

// birden fazla parametre alan fonksiyon 

/* değer döndüren fonksiyonlarda fonksiyon isminin içine parametre veririz ve parametreye verdiğimiz değer sonucunda tanımladığımız fonksiyona göre bir sonuç alırız. bazen birden fazla parametre girmek isteriz ve kaç tane parametre gireceksek ona göre oluştururuz fakat bazen giriceğimiz parametrelerin sayısı belli olmaz. bu durumda şunları kullanırız ; */

//Arguments 

function sumAllNum() {
    console.log(arguments);
}

sumAllNum(1,2,3,5,6,8) // yukarıda arguments isimli özelliği tanımladık ve fonskiyon ismine parametre girmeden girdiğimiz parametreleri konsola döndürdük.arguments birçok farklı şekilde kullanılabilir

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}

console.log(sumAllNums(1,2,4,7,9)); //burda girdiğimiz değerlerin toplamını verdi

//not: arguments arrow function'da kullanılmaz

//Rest Operatörü

const rest = (... numbers) =>{
   console.log(numbers);
} //burda arguments ile aynı işlemi "..." işareti ile yaptık. bu özellik tüm fonksiyon çeşitlerinde kullanılır.

rest(1,3,4,5)


