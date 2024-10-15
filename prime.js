function* getPrimes() {
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const primeGenerator = getPrimes();
for (let i = 0; i < 5; i++) {
    console.log(primeGenerator.next().value);
}