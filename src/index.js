class SmartCalculator {
    constructor(initialValue) {
        this.number = initialValue;
        this.answer = 0;
        this.stack = [];
        this.stack.push(initialValue);
    }

    add(number) {
        this.stack.push('+');
        this.stack.push(number);
        return this;
    }

    subtract(number) {
        this.stack.push('-');
        this.stack.push(number);
        return this;
    }

    multiply(number) {
        this.stack.push('*');
        this.stack.push(number);
        return this;
    }

    devide(number) {
        this.stack.push('/');
        this.stack.push(number);
        return this;
    }

    pow(number) {
        this.stack.push('^');
        this.stack.push(number);

        return this;
    }
}

SmartCalculator.prototype.valueOf = function(){
    let value = '';
    let len = this.stack.length;
    for (let i = 0; i < len; i++) {
        if (this.stack[i + 1] === '^') {
            let pow = true;
            let step = 0;
            let str = '';
            while (pow) {
                step++;
                if (this.stack[i + 1] === '^') {
                    i += 2;
                } else {
                    str = this.stack[i];
                    k = 1;
                    while (k < step) {
                        str = 'Math.pow(' + this.stack[i - 2 * k] + ', ' + str + ')';
                        k++;
                    }
                    pow = false;
                }
            }

            value = value + str;
        } else {
            value = value + this.stack[i];
        }
    }
    this.answer = eval(value);

    return this.answer;
}

module.exports = SmartCalculator;
