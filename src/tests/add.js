const add = (a, b) => a + b;
const generateGreetings = (name = 'Anonymous') => `Hello ${name}`;
test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)
})

test('Should print the greeting', () => {
    const greeting = generateGreetings('Parag');

    expect(greeting).toBe('Hello Parag')
})

test('Should print the greeting', () => {
    const greeting = generateGreetings();

    expect(greeting).toBe('Hello Anonymous')
})