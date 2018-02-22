// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    let exchange = {};
    let remainder = 0;

    if (currency >= 50) {
        exchange.H = Math.floor(currency / 50);
        remainder = currency % 50;
        if (remainder == 0) {
            return exchange;
        }
        currency = remainder;
    }

    if (currency >= 25 && currency < 50) {
        exchange.Q = Math.floor(currency / 25);
        remainder = currency % 25;
        if (remainder == 0) {
            return exchange;
        }
        currency = remainder;
    }

    if (currency >= 10 && currency < 25) {
        exchange.D = Math.floor(currency / 10);
        remainder = currency % 10;
        if (remainder == 0) {
            return exchange;
        }
        currency = remainder;
    }
    if (currency >= 5 && currency < 10) {
        exchange.N = Math.floor(currency / 5);
        remainder = currency % 5;
        if (remainder == 0) {
            return exchange;
        }
        currency = remainder;
    }

    if (currency >= 1 && currency < 5) {
        exchange.P = currency;
    }

    return exchange;
}
