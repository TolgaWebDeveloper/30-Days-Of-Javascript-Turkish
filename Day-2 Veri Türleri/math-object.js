// Math Object (Matematik Objesi)

/*math object javascript'te tüm matematik işlemleri için kullanılan bir obje.anahtar kelimesi "Math"*/

//örneğin;

let PI = 3.14; /* normalde Pi sayısı 3.14'tür. fakat bunu biz hesaplamakla uğraşmayalım bize "Math" hesaplasın*/

PI = Math.PI; //sonuç konsol ekranına yansıdı

console.log(PI);

console.log(Math.round(9.80));// round objesi ise 9.80 sayısını en yakın sayıya yuvarlar

console.log(Math.ceil(9.10));// ceil objesi ise içindeki sayıyı en yüksek sayıya yuvarlar. sayı 9.10 olsa bile 10'a yuvarlar

console.log(Math.floor(9.98));// floor objesi ise içindeki sayıyı en düşük sayıya yuvarlar. sayı 9.98 olsa bile 9'a yuvarlar

console.log(Math.min(1,3,5,-10,10,-50)); //min objesi ise değerler arasındaki en düşük sayıyı konsola yansıtır

console.log(Math.max(1,3,5,-10,10,-50,)); //max objesi ise değerler arasındaki en büyük sayıyı konsola yansıtır

console.log(Math.random()) //random objesi 0 ile 0.9999 arasında random bir değer oluşturur

console.log(Math.floor(Math.random() * 11)) //burda ise 0 ile 10 arasındaki değerleri tamsayı olarak en yüksek sayı olarak yazıyor

console.log(Math.abs(-10)); //abs sayının mutlak değerini verir

console.log(Math.sqrt(64)); //sqrt sayının karekökünü verir

console.log(Math.pow(8,2)); //pow sayının üssünü verir. örneğin 8'in karesi 3'ün kökü gibi. örnekte 8'in karesini istedik


