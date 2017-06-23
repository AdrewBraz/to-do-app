'use strict';

let counter = 1;

const Counter = {
    increment() {
        return `${String(counter++)}`
    },

    decrement() {
        return `${String(counter--)}`
    }
};

export default Counter;