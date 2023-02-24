// les variables Js 
let user_nane = 'johnDoe';
let password = '1234';
let ageUtilisateur = 20;
// Affichages des variables 
console.log('Bonjour ' +user_nane);
console.log('Vous avez ' + ageUtilisateur + 'ans');
console.log('Votre mot de passe est :');
console.log(password);

// les operations 
let nombre1 = 20;
let nombre2 = 30;
let resultat_addition = nombre1 + nombre2;
let resultat_multip = nombre1 * nombre2;

console.log(resultat_addition);
console.log(resultat_multip);

let resultat = resultat_addition;
console.log(resultat);

resultat = resultat_multip;
console.log(resultat);

// TP1 ecrire un programme qui echange la valeur de 2 Variables données 
let A = 10;
let B = 20;

let C = A;
A = B;
B = C;

console.log(A);
console.log(B);

