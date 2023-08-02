// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre 
// entre 00 et 99 dans l’ordre croissant.


// Exemples d’utilisation :
// $> python exo.py
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $>

// Fonction qui formate 
let numberToString = (number) => {
    if (number < 10) {
        return "0" + number; // On ajoute un 0 devant si c'est un chiffre
    } else {
        return number.toString(); // on converti en chaine de caractères
    }
}

// Fonction principale 
let displayCombinationsSorted = () => {
    for (let i = 0; i <= 98; i++) { // 99 est exclu car il sera supérieur au 2ième nombre
        for (let j = i + 1; j <= 99; j++) { // on veut le résultat dans l'ordre croissant, donc le 2ième nombre sera + 1 par rapport au 1er nb 
            const combination = numberToString(i) + " " + numberToString(j); // on concatène le nombre 1 avec le nombre 2 pour l'affichage
            process.stdout.write(combination + ", "); // afficher sur la même ligne
        }
    }
}

displayCombinationsSorted();
