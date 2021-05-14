import toFixed from '../components/digits/Digits';

console.log(toFixed(20.55))

test('Fixed number without decimal point', () => {
    const test = toFixed(20.55);
    expect(test).toBe("21");
});