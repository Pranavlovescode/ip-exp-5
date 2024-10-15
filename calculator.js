function calculate(a, b, operation) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Both arguments must be numbers');
        }

        switch (operation) {
            case 'add':
                resolve(a + b);
                break;
            case 'subtract':
                resolve(a - b);
                break;
            case 'multiply':
                resolve(a * b);
                break;
            case 'divide':
                if (b === 0) {
                    reject('Cannot divide by zero');
                } else {
                    resolve(a / b);
                }
                break;
            default:
                reject('Invalid operation');
        }
    });
}

calculate(10, 5, 'add')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(10, 0, 'divide')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(10, 'five', 'multiply')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(10, 5, 'modulus')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));