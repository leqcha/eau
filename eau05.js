// Créez un programme qui détermine si une chaîne de caractère se trouve
// dans une autre.
// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true
// $> python exo.py bonjour joure
// false
// $> python exo.py 42
// error
// Afficher error et quitter le programme en cas de problèmes d’arguments.


const { argv } = require("process");
let userStrings = argv.slice(2);

if (userStrings.length !== 2) { // gestion erreur avant les fonctions pour pouvoir sortir du programme
    console.log("error");
} else { // cas attendu
    let tabA = userStrings[0]; // on envoie les 2 argu dans 2 tableaux pour les comparer
    let tabB = userStrings[1];

    let findSubstring = (tabA, tabB) => { // fonction qui cherche la sous chaine
        let isFound = false;

        for (let i = 0; i <= tabA.length - tabB.length; i++) { 
            if (tabA.slice(i, i + tabB.length) === tabB) { // si on trouve tabB dans tabA on l'extrait à sa position en cours
                isFound = true;
                break;
            }
        }

        return isFound;
    };

    console.log(findSubstring(tabA, tabB));
}
