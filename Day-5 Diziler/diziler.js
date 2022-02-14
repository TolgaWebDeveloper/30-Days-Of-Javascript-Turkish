//diziler (array)

/* diziler bir değişken içine birden fazla değer atamak için kullanılır. örneğin değişken içine bir sayı kümesi veya bir isim grubu atayabiliriz. */

/* diziler bir index'e yani bir numaraya sahiptir. örneğin dizideki ilk elemanı çağırmak istediğimizde programlama dilinde sayma 0 dan başladığı için 0.cı index'i çağırırız */

//boş bir dizi oluşturmak

let arr = Array();

console.log(arr); //veya

let arr2 = [] //şeklinde oluşturabiliriz ki bu en sık kullanılan yöntem. ikisinin arasındaki farkı aşağıda göreceğiz

console.log(arr2);

// array'e değer atama

/* burda isim değişkenine bir dizi oluşturdum ve diziye string olarak isimleri yazdım. bu sayede hepsi için tek tek değişken oluşturmaktansa tek bir değişken içine birden fazla değer atadık*/
let isim = ["tolga","umut","abdullah"]

console.log(isim);

//not: diziler sadece string oluşturmak için kullanılmaz. hatta bir dizi içine farklı türde birden fazla değişken atanabilir. örneğin;

let dizi = ["tolga",18,true,null] // burda farklı türlerde değerler atadık

console.log(dizi);

//lenght kullanımı 

/* lenght'i diğer derslerde değerin kaç karakterli olduğunu öğrenmek için kullanmıştık. burda da aynı kullanımı dizi içinde kaç tane kelime olduğunu bulmak için kullanacağız */

console.log(dizi.length); // burda dizi değişkeninin içinde kaç tane değer olduğu bilgisini aldık

// split kullanımı 

/* split bir değeri parçalamaya ya da ayırmaya yarar. örneğin bir kelime girdiğimizde split ile o kelimenin her bir harfini bölerek dizi oluşturabiliriz veya virgül ile bölerek bir cümledeki her bir kelimeyi ayırabiliriz. */

console.log("tolga".split("")); // konsolda [t,o,l,g,a] şeklinde bir değer oluştu. harfleri ayırmak için boş bir çift tırnak veya tek tırnak kullanmalıyız

let cümle = "bu, cümle, split, ile, kelimelerine, ayrılmıştır"

console.log(cümle.split(",")); //burda ise virgülden sonra ayır diyerek her bir kelimeyi dizi elemanı haline getirdik

// index numarası ile eleman çağırma

/* örneğin birden fazla sayı bulunan bir dizi elemanımız var ve biz bunun içinden sadece bir tanesini çağırmak istiyoruz. bunun için o değeri index numarası ile seçeriz */

let sayı = [1,3,6,9,12,25,52]

console.log(sayı);

console.log(sayı[0]); //burda konsola dizinin ilk yani 0.elemanı olan 1'i çağırdık
console.log(sayı[6]); //burda konsola dizinin son yani 6.elemanı olan 52'yi çağırdık.

//not: dizinin son elemanı değer sayısı -1 dir. yani 7 tane elemanın içinden son elemanı seçmek istiyorsanız 6.eleman olarak yazmanız gerekmektedir. ama bu hem kafa karışıklığına neden olacağından hem de hataya sebebiyet vereceğinden şu yöntem daha mantıklı:

let lastİndex = sayı.length -1

console.log(sayı[lastİndex]); //burda dizideki karakter sayısının 1 eksiğini yani son sayıyı kendisi buldu

// eleman değiştirme

sayı[1] = 5 // dizideki 2.eleman yani 1.indexteki elemanımızı 5 değeri ile değiştirdik ve bu konsolda artık 2.değerimiz 5 olarak görünür. bu şekilde dizideki elemanları güncelleyebiliriz

console.log(sayı);

// dizi metodları

let array = Array(8) // bu özelliği yukarıda görmüştük hatta diğer yöntem ile arasında farklar olduğunu söylemiştik. bu farklardan biriside bu örnekteki gibi kaç tane dizi oluşturacağımızı belirtmek. burda bir dizi içine 8 tane boş eleman oluşturduk. bunu diğer yöntemle yaparsak;

/* let array = [,,,,,,,,] şeklinde bir kullanım olur ki buda kod kirliliği yaratır. peki neden boş bir değer oluşturuyoruz dersek ileride bu boş değerleri dolduracağız. örneğin 8 tane isim kontenjanınız var ve siz bunları hemen değilde sonra eklemek istiyorsunuz. bu durumda 8 tane boş eleman oluşturup aklınıza gelen isimleri boş değerlerle doldurabilirsiniz veya bir dizide sadece 8 tane eleman olsun istiyorsanız bu yöntemi kullanabilirsiniz */ 

console.log(array);

//fill

/* fill dizideki elemanları sadece bir değerle değiştirir */

let sekizTaneX = Array(8).fill("x")

console.log(sekizTaneX); //burda boş elemanların hepsini x yaptık

//concat

/* concat bir diziye başka bir diziyi ekleme yani dizileri birleştirme görevini görür */

let array1 = [1,2,3]
let array2 = [4,5,6]

console.log(array1.concat(array2)); //konsola [1,2,3,4,5,6] şeklinde döndü

//not: concat içine birden fazla dizi de eklenebilir

let array3 = [7,8,9]

console.log(array1.concat(array2,array3,[10,11,12])); // concat içine kendimizde bir değer tanımlayabiliriz

//indexOf

/* indexOf metodu bize dizinin içinde yazıdğımız değerin olup olmadığını, varsa kaçıncı indexte olduğunu gösterir */

let num = [1,3,5,6,8,6,4]

console.log(num.indexOf(5)); // burda dizi içinde 5 değerinin olup olmadığını sorduk ve bize 2.indexte olduğunu söyledi
console.log(num.indexOf(2)); // burda dizi içinde 2 değerinin olup olmadığını sorduk ve bize olamdığı için -1 değerini döndü

//lastIndexOf

/* bir dizi içinde iki tane aynı değer olabilir. bu durumda o değeri sorguladığınızda size ilk bulduğu yerin index numarasını verecektir yani soldan sağa doğru sayacaktır. lastIndexOf ise sağdan sola doğru sayar ve diğer elemanı size verir */

console.log(num.indexOf(6)); //burda 6 değerini sorduğumuzda bize ilk gördüğü 6 nın indexini yani 3 değerini döndü
console.log(num.lastIndexOf(6)); //burda ise sağdan sola doğru sayarak diğer 6 nın indexini yani 5 değerini döndü

//includes

/* includes indexOf gibi değerin olup olmadığını sormamıza yarıyor fakat tek farkı bize sonuç olarak boolean bir değer döndürüyor. yani varsa true yoksa false değeri döndürüyor */

console.log(num.includes(8)); // 8 değerinin olup olmadığını sorduk ve olduğu için true döndü
console.log(num.includes(9)); // 9 değerinin olup olmadığını sorduk ve olmadığı için false döndü

//Array.isArray()

/* bu metod bize değişkenin bir dizi olup olmadığını söyler ve boolean bir değer döndürür */

console.log(Array.isArray(num));// num değişkeni bir dizi olduğu için true döndü

let age = 18

console.log(Array.isArray(age));// age değişkeni bir dizi olmadığı için false döndü

console.log(num.toString()); // bir diziyi string bir ifadeye çevirmek için toString metodunu kullanırız

//join

/* join metodu bir diziyi string ifadeye çevirerek birleştirir */

console.log(num.join());// join varsayılan olarak birleştirmeyi "," ile yapar. bunun için join metoduna bir değer girilmez 
console.log(num.join(""));// burda boş bir tırnak ile bir karakter kullanmadan dizideki elemanları birleştirdik
console.log(num.join(" "));// burda boş bir tırnak içine boşluk ile elemanlar arasında boşluk koyarak birleştirme yaptık. ne kadar boşluk koyarsanız o kadar arada boşluk bırakır
console.log(num.join(" # "));// burda ise sembol girerek araya sembolü koyarak birleştirme yapar. istediğiniz sembolü kullanabilirsiniz

//slice

/* slice metodu belli bir aralıkta kesme görevi görür. bir başlangıç ve bitiş değeri ister. o değer dışındaki elemanları siler */

console.log(num.slice(2,4)); //burda 2.indexteki ve 4.index arasındaki elemanlar hariç diğer elemanlar silindi ve 5 ile 6 kaldı.

//not: son girdiğimiz değerdeki elemanı almaz. örneğin yukarıda 2.indexteki elemanı aldı ama 4.indexteki eleman silindi

//push 

/* push metodu dizimizin sonuna eleman eklememizi sağlar */

console.log(num);

num.push(17) // num değişkenindeki dizinin sonuna 17 sayısını ekledik ve aşağıda tekrar konsola yazdırdık.

console.log(num);

//pop

/* pop metodu dizimizin sonundaki elemanı çıkarır ama pop'u bir değişken içinde kullanırsak bize son değeri diziden çıkarıp döndürür */

num.pop()

console.log(num);//yukarıda sondaki eleman olan 17'yi pop'la kaldırdık

let sonDeger = num.pop();

console.log(sonDeger); //burda ise şuanki son eleman 4 olduğu için sadece 4 rakamını konsola döndürdü

//shift 

/* shift metodu baştaki elemanı siler ve pop gibi baştaki elemanı döndürür */

num.shift() 

console.log(num);// shift ile baştaki eleman olan 1'i çıkardık

let ilkDeger = num.shift()

console.log(ilkDeger); //burda ise şuanki ilk eleman olan 3'ü konsola döndürdü

//unshift

/* unshift ilk elemana değer ekler */

num.unshift(1) //num dizisinin başına 1 değerini ekledik. bu arada ilkDeger değişkenini kullanarak 3'ü çıkarmış olduğumuz için 3'ün yerine yazıldı. yani yer değiştirme söz konusu değildir

console.log(num);

//reverse

/* reverse metodu dizi sıralamasını tersine çevirir */

let number = [1,2,3,4,5]

console.log(number);
console.log(number.reverse());//burda sıralamayı tersten yani 5'ten başlatıp 1'e doğru sıraladık

//sort 

/* sort metodu diziyi alfabetik ya da numara sırasına göre sıralar */

let number2 = [1,3,5,2,6,4]

console.log(number2.sort());//burda bize karışık olan rakamları 1 den 6 ya doğru düzenleyerek sıraladı

let programLanguages = ["html","javascript","css","python","go","rust","c#"]

console.log(programLanguages.sort()); //burda ise alfabetik sıraya göre dizimizi sıraladı

// Array of Array

/* dizilerin içinde birden fazla farklı değer bulundurabileceğini söylemiştik. bu değerlerin sadece primitive olması şart değil. örneğin bir dizi içine bir dizi daha ekleyebiliriz veya bir dizinin içine obje ekleyebiliriz hatta o dizinin içindeki dizinin elemanına ulaşabiliriz */

let numbers = [1,2,3,[4,5,6],7]

console.log(numbers);

console.log(numbers[3][0]);//burda 3.indexteki dizinin içindeki ilk elemanı çağırdık