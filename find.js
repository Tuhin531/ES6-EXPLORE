const products =[
    { id: 1, name: 'sakib', salary: 20 },
    { id: 2, name: 'sumon', salary: 30 },
    { id: 3, name: 'akash', salary: 41 },
    { id: 4, name: 'niloy', salary: 53 }
];
const five = products.find(product => product.salary % 5 === 0);
console.log(five);
