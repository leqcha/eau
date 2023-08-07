// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


// Exemples d’utilisation :
// $> python exo.py 3
// 2
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

// fonction qui permet de calculer la suite
let fibonacci = (number) => {
    if (number === 0) { // on gère les cas 0
        return 0;
    } else if (number === 1) { // et 1
        return 1;
    } else { // le cas normal
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

// fonction qui récupère le nombre précédent
let findPreviousInFibonacci = (number) => {
    if (isNaN(number) || number <= 0) {
        console.log("-1");
    } else {
        let currentNumber = 1;
        let previousNumber = 0;
        let temp;

        while (currentNumber < number) {
            temp = currentNumber;
            currentNumber = currentNumber + previousNumber;
            previousNumber = temp; // on stocke dans une variable temporaire le nombre précédent de la suite
        }

        console.log(previousNumber);
    }
}

const { argv } = require("process");
let numberUser = argv.slice(2);
findPreviousInFibonacci(numberUser);


