// Créez un programme qui met en majuscule la première lettre de chaque
// mot d’une chaîne de caractères. Les autres lettres devront être en
// minuscules. Les mots ne sont délimités que par un espace, une tabulation
// ou un retour à la ligne.
// Exemples d’utilisation :
// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!
// $> python exo.py 42
// error
// Afficher error et quitter le programme en cas de problèmes d’arguments.

// Fonction 
let upperCaseFirstChar = (inputString) => {
    if (!isNaN(inputString)) { // on vérifie que le paramètre entré n'est pas un nb
        return 'error';
    }
    // met la première lettre en majuscule puis concatène le reste du mot
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

// Parsing
const args = process.argv.slice(2);

// on vérifie que l'argu passé n'est pas vide
if (args.length === 0) {
    console.log('error');
    process.exit(1); // on quitte
}

// Résolution & affichage
for (const inputString of args) {
    const modifiedChar = upperCaseFirstChar(inputString);
    process.stdout.write(modifiedChar + ' ');
}