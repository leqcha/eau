// Créez un programme qui affiche ses arguments reçus à l’envers.

// Afficher error et quitter le programme en cas de problèmes d’arguments.

let reverseArgs = () => {
    if (args.length === 0) { // on gère le cas où aucun argument n'est passé
        console.log("error");
        return;
    }
    for (let i = args.length - 1; i >= 0; i--) { // On parcourt les arguments et on les affiche à l'envers
        const reverse = args[i];
        console.log(reverse);
    }
}

const args = process.argv.slice(2);

reverseArgs();

