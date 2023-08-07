// Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.


// Exemples d’utilisation :
// $> python exo.py 14
// 17
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

// fonction qui permey
let isPrime = (number) => { 
    if (number <= 1) {
        return false;
    }
    if (number === 2 || number === 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) { //
        return false;
    }
    
    let i = 5; // on commence à 5 car c'est le premier nombre premier après 3
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    
    return true;
}

// vérifie que l'entrée est bien un nombre positif
let verification = (numberUser) => {
    if (isNaN(numberUser) || numberUser <= 0) {
        console.log("-1");
        return false;
    }
    return true;
}

// trouve le nb premier suivant 
let nextPrimeNumber = (number) => {
    let n = number + 1;
    while (!isPrime(n)) { // tant que la fonction isPrime retourne false, on incrémente
        n++;
    }
    return n;
}

const numberUser = parseInt(process.argv[2]);
if (verification(numberUser)) {
    const resultat = nextPrimeNumber(numberUser);
    console.log(resultat);
}


