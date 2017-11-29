let names = ['Alice', 'Emily', 'Kate'];
console.log(names.map((name, index) => {
    return `<div key=${index}>Hello, ${name}!</div>`
}));