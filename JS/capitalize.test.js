const capitalizeString = require('./capitalize.js')

test('hi to Hi', () => {
    expect(capitalizeString('hi')).toBe('Hi');
})

test('This should be a string', () => {
    expect(() => {
        capitalizeString(200);
    }).toThrow();
})