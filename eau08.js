// Chiffres only
// Créez un programme qui détermine si une chaîne de caractères ne
// contient que des chiffres.
// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true
// $> python exo.py “Bonjour 36”
// false
// Afficher error et quitter le programme en cas de problèmes d’arguments

// Fonction vérification par code ascii
function isContainsOnlyNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
    return true;
}

// Parsing
const args = process.argv.slice(2);
const input = args[0];

if (args.length !== 1) { // gestion d'erreur
    console.log(false);
    process.exit(1);
}

// Résolution & affichage
if (isContainsOnlyNumbers(input)) {
    console.log(true);
} else {
    console.log(false);
}



