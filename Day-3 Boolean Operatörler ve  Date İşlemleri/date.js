// Date Object

/* date objesi bize güncel tarih bilgilerini ekrana getiren ve bu bilgileri güncellememize olanak sağlayan objedir. saat ve tarih işlemleri yaş hesaplama vb. bu obje yardımıyla yapılır */

let d = new Date(); // new date ile gün ay yıl saat dakika saniye olarak güncel tüm bilgileri istemiş olduk


//Get Methods 

/* new date ile bilgileri aldık fakat biz hepsini ekrana yansıtmak istemeyebiliriz. tekil olarak ay yıl bilgisini çağırmak için get metodunu kullanırız */

console.log(d.getFullYear());// burda sadece yıl bilgisini yansıtırız
console.log(d.getMonth());// burda sadece ay bilgisini yansıtırız.ay bilgisi bize rakam olarak gelmektedir /* not: programlama dilinde sayma "0" dan başlar ve ay olarak "0" ocak ayına denk gelmektedir*/
console.log(d.getDate()) //burda ise ayın kaçında olduğumuzu yansıttık
console.log(d.getDay()) //burda ise hangi günde olduğumuzu yansıttık. gün bilgisi bize sayı olarak geldi ve "0" pazar gününe denk 
console.log(d.getHours()) //burda ise saat bilgisini yansıttık
console.log(d.getMinutes()) //burda ise dakika bilgisini yansıttık
console.log(d.getSeconds()) //burda ise saniye bilgisini yansıttık

console.log(d)//burda ise yukarıda tanımladığımız new date görünür

