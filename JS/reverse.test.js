const reverseString = require('./reverse.js');

test('reverse "good" to "doog"', () => {
    expect(reverseString('good')).toBe('doog')
});

test('reverse "morning" to "gninrom"', () => {
    expect(reverseString('morning')).toBe('gninrom')
});

test('reverse "boy" to "yob"', () => {
    expect(reverseString('boy')).toBe('yob')
});



// const reverseString = require("./task2");

// test('reversed "hey" to "yeh"', () => {
//     expect(reverseString('hey')).toBe('yeh');
//   });
  
//   test('reversed "morning" to "gninrom"', () => {
//     expect(reverseString('morning')).toBe('gninrom');
//   });
  
//   test('reversed "test" to "tset"', () => {
//     expect(reverseString('test')).toBe('tset');
//   });
