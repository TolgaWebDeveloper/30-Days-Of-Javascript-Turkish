//Window Methods

/* window yani pencere metodları console, alert gibi ekrana ve konsola gelecek işlemleri tanımladığımız metodlar.*/

// 1-alert metodu

/* alert metodu kullanıcıya site yenilendiğinde veya bir işlem yapıldığında mesaj gösterir ve ok butonuyla onaylatır */

// alert("merhaba dünya") //burda site yenilendiğinde veya açıldığında kullanıcıyı merhaba dünya yazısı karşıladı. genelde bir şeyi test etmek içinde kullanılır ama bu önerilmez ki zaten bunun için console metodu var

// 2-prompt metodu

/* promp metodu alert gibi site yenilendiğinde veya bir işlem yapıldığında bir kutucuk içinde ekrana gelir fakat kullanıcıdan bir değer ister */

// prompt("buraya merhaba yaz") //burda karşımıza çıktı ve değeri istedi. yazdığımız değer ise şuanda boşa gidecektir yani elimize ulaşmayacaktır çünkü biz değeri ne yapacağını söylemedik. bunun için değer olarak alabiliriz ve o değeri ister konsola yazdırırız istersek de alert olarak yazarız 

let kullanıcıVerisi = prompt("buraya merhaba yazar mısın?");

console.log(kullanıcıVerisi) //burda kullanıcıdan veriyi aldık ve onu konsola yazıdrdık

// 3-confirm metodu

/* confirm metodu türkçesinden anlaşılacağı üzere bir onay kutusudur. ekrana alert gibi kutu gelir ve tamam dersek true gelecek, iptal dersek false gelecek */

let agree = confirm("bendende sana merhaba :)")

console.log(agree) //burda aldığımız sonucu konsola yazdırdık