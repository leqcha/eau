for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if ((i !== j && i !== k && k !== j) && ( i < j && j < k)) {
                console.log(`${i}${j}${k}`);
            }
        }
    }
}