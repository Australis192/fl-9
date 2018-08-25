function getClosestToZero() {
    let num = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(num)) {
            num = arguments[i];
        }
    }

    return num;
}