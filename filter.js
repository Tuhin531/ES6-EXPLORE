const products =[
        { id: 1, name: 'sakib', salary: 20000 },
        { id: 2, name: 'sumon', salary: 30000 },
        { id: 3, name: 'akash', salary: 40000 },
        { id: 4, name: 'niloy', salary: 50 }
    ];
 const expensive = products.filter(product => product.salary > 1000);
const expensive2 = products.filter(product => product.salary < 1000);
// console.log(expensive);
console.log(expensive2);
