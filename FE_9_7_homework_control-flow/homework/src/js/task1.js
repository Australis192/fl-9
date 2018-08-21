const login = prompt('Please enter your login');

if (login === `User`) {
    const pw = prompt('Please enter your password');

    if (pw === `SuperUser`) {
        const time = new Date().getHours();
        if (time < 20) {
            alert(`Good Day!`);
        } else {
            alert(`Good Evening!`);
        }
    } else if (!pw || pw === null) {
        alert(`Canceled.`);
    } else {
        alert(`Wrong password`);
    }
} else if (!login || login === null) {
    alert(`Canceled.`);
} else if (login.length < 4) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else {
    alert(`I don’t know you`);
}
