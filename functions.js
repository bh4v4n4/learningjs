
function time(n) {
    for (let i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * n);
    }
}

time(1000);
