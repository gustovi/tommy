// Lui Olea îi plac numerele palindrom. Un număr este considerat palindrom dacă răsturnatul său (citit de la dreapta la stânga) este egal cu originalul (Exemplu: numărul 12321 este palindrom).

// Cerințe:
// Să se determine dacă o variabilă conține o valoare palindrom.
// Afișați în consolă numărul și un mesaj dacă acesta este sau nu palindrom.



// function estePalindrom(numar) {
//    let numarInversat = 0;
//    let numarInitial = numar;
 
//    // inversăm numărul
//    while (numarInitial > 0) {
//      numarInversat = numarInversat * 10 + numarInitial % 10;
//      numarInitial = Math.floor(numarInitial / 10);
//    }
 
//    // verificăm dacă numărul inițial și inversat sunt egale
//    if (numar === numarInversat) {
//      console.log(numar + ' este un număr palindrom.');
//    } else {
//      console.log(numar + ' nu este un număr palindrom.');
//    }
//  }

//  estePalindrom(12321)

// Olea s-a entuziasmat și mai tare cu numerele palindrom și vrea să țină o evidență
// cu acestea. Ea s-a gândit să facă o listă cu toate numerele palindrom până la
// 10000 ca să îi fie mai ușor să le găsească mai târziu.
// Cerințe:
// 1. Folosiți implementarea anterioară pentru palindrom și includeți-o într-o
// funcție
// 2. Folosiți funcția pentru a verifica numerele care sunt palindrom
// 3. Creați un array care să conțină numerele palindrom.
// 4. Afișați numerele din array în consolă.
let palindromNumbers = [];
function isPalindrom(num){
   let initialNumber = num;
   let finalNum = 0;
   while (num != 0) { 
      finalNum = num % 10 + finalNum * 10;
      num = Math.floor(num / 10);
   }
   // if (initialNumber === finalNum){
   //    return true
   // }
   //    return false
   return initialNumber === finalNum ? true : false
}
   for (let i = 0; i <= 200; i++){
      if (isPalindrom(i)){
         palindromNumbers.push(i);
      }
   }
   for (let palindromNumbers of palindromNumbers){
      console.log(palindromNumbers);
   }


