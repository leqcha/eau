// Créez un programme qui met en majuscule une lettre sur deux d’une
// chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.
// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !
// $> python exo.py 42
// error
// Afficher error et quitter le programme en cas de problèmes d’arguments.

// Fonction
let upperCaseOneOfTwo = (inputString) => {
    if (typeof inputString !== 'string') {  // gestion d'erreur
      return 'error';
    }
  
    let modifiedString = '';
    for (let i = 0; i < inputString.length; i++) {
      if ((i % 2) === 0) { // si le nombre est pair
        modifiedString += inputString[i].toUpperCase(); // on change la casse
      } else {
        modifiedString += inputString[i]; // on ne fait rien
      }
    }
    return modifiedString;
  }

  // parsing
  const args = process.argv.slice(2); 
  
  // Résolution & affichage
  for (const inputString of args) {
    const modifiedString = upperCaseOneOfTwo(inputString);
    process.stdout.write(modifiedString + ' ');
  }

  


