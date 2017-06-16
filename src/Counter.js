'use strict';

let counter = 1;

const Counter = {
    increment() {
        return `id ${String(counter++)}`
    },

    decrement() {
        return `id ${String(counter--)}`
    }
};

export default Counter;