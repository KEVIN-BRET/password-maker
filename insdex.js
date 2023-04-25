// variable contenant les lettres en minuscules :
const dataLowerCase = "abcdefghijklmnopqrstuvwxyz";
// variable contenant les lettres en majuscules :
const dataUpperCase = dataLowerCase.toUpperCase();
// variable contenant les chiffres :
const dataNumbers = "0123456789";
// variable contenant les symboles :
const dataSymbols = `£%ù^¨*$();:?!"'&é#°-_@`;
// on pointe l'élément qui contient la valeure da range :
const rangeValue = document.getElementById("password-length");
// on pointe l'élément qui affichera le mot de passe généré :
const passwordOutput = document.getElementById("password-output");

// console.log(rangeValue.value);
// retourne la valeur du range (8 par défaut)

function generatePassword() {
  // le tableau data stockera les caractères à utiliser :
  let data = [];
  // la varaible password contiendra le MDP généré :
  let password = "";

  // console.log(uppercase.checked);
  // JS sait que uppercase est un id dans le hmtl !

  // pour chaque type de caractères sélectionné, on casse
  // leur chaine de caratères avec le spread operator ""...""
  // pour les ajouter un à un à data :
  if (lowercase.checked) data.push(...dataLowerCase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  // si aucun type de caractère n'est choisit, on affiche une alerte :
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  // pour incrémenter password,
  //on boucle autant de fois que la valeur du range :
  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    // += pour ajouter, et non écraser !
    // Math.floor pour arrondir à la valeur inférieur
    // Mth.random() pour choisi un élément aléatoire dans data
    // pour choisir entre l'index 0 et le max du tableau "* data.length"
    // (sinon Math.random choisi une valeur entre 0 et 1 !)

    // console.log(password);

    // on demande à passwordOutput (<input id="password-output" >)
    // d'afficher de la variable password à l'écran :
    passwordOutput.value = password;

    // on séléctonne le MDP afficher
    passwordOutput.select();
    // on le copie dans le presse-papier :
    document.execCommand("copy");
    // on avertit l'utilisateur en affichant "Copié !" sur le bouton :
    generateButton.textContent = "Copié !";
    // on efface le message "Copié !" après 2 secondes :
    setTimeout(() => {
      generateButton.textContent = "Générer mot de passe";
    }, 2000);
  }
}

generateButton.addEventListener("click", generatePassword);
