const Queue = require('./');
const assert = require('assert');

const PUSH = 'enqueue';
const POP = 'dequeue';

const tests = [
    /**
     * [operationType, value, maxValue (peek)]
     */
    [PUSH, 51, 51],
    [PUSH, 26, 51],
    [PUSH, 32, 51],
    [PUSH, 88, 88],
    [PUSH, 81, 88],
    [PUSH, 27, 88],
    [PUSH, 45, 88],
    [POP, 88, 81],
    [POP, 81, 51],
    [PUSH, 33, 51],
    [PUSH, 80, 80],
    [POP, 80, 51],
    [POP, 51, 45]
];

describe('Queue: ', () => {
    const queue = new Queue();

    tests.forEach((t) => {
        const [method, value, expected] = t;

        if (method === PUSH) {
            test(`${method}(${value}), front() returns ${expected}`, () => {
                queue.enqueue(value);
                expect(queue.front()).toBe(expected);
            });
        } else if (method === POP) {
            test(`${method}() return ${value}, front() returns ${expected}`, () => {
                expect(queue.dequeue()).toBe(value);
                expect(queue.front()).toBe(expected);
            });
        } else {
            assert(false);
        }
    });
});
