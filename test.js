function calculator(op, a, b) {
    switch (op) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return a / b
    }
}


function calculatorFunctional(opFn) {
    function result(a, b) {
        if (a === '') {

        } else {
            return opFn(a, b)
        }
    }

    return result
}

const soma = calculatorFunctional((a1, b1) => a1 + b1)
const sub = calculatorFunctional((a1, b1) => a1 - b1)


soma(1, 2)
