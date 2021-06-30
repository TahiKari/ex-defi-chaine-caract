const objet = prompt('Entrez le motif de la convocation');
const lastName = prompt('Entrez un nom');
const firstName = prompt('Entrez un prénom');
const gender = prompt('M ou Mme');
const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
const place = prompt('Entrez un numéro de bureau');
const signature = 'Votre agent administratif';

let firstNameFormated = firstName.toLowerCase();
let objetFormated = objet.toLowerCase();
let genderFormated = gender.toLowerCase();

// Majuscule sur la première lettres
let firstNameUpperFirstLetter = firstNameFormated.substring(0, 1).toUpperCase();
let objetUpperFirstLetter = objetFormated.substring(0, 1).toUpperCase();
let genderUpperFirstLetter = genderFormated.substring(0, 1).toUpperCase();

// Minuscule sur le reste des lettres
let firstNameLowerletter = firstNameFormated.substring(1).toLowerCase();
let = objetLowerLetter = objetFormated.substring(1).toLowerCase();
let = genderLowerLetter = genderFormated.substring(1).toLowerCase();

// Concaténation
firstNameFormated = firstNameUpperFirstLetter + firstNameLowerletter;
objetFormated = objetUpperFirstLetter + objetLowerLetter;
genderFormated = genderUpperFirstLetter + genderLowerLetter;

let body = `
À ${lastName.toUpperCase()} ${firstNameFormated}

        Objet de la convocation : ${objetFormated}

        ${genderFormated} ${lastName.toUpperCase()} ${firstNameFormated}, Vous êtes convoqué(e) le ${dateAppointement} dans le bureau ${place} pour le motif suivant: ${objetFormated}.

En vous remerciant.

${signature}

`;

console.log(body);
