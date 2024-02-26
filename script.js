// var let const 
// break up with var

const numbers = [12, 3324, 32, 45];
let salary = 3324;
salary = 455;

// default parameters

function calculationSalary(salary, tax = 0.24, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// template string 

const elementHtml = ` 
<div>
 <h3> Name: </h3>
 <p> Address: </p>
 <p> Salary: ${calculationSalary(10000, 0, 0)} </h3>
 <p> Others: ${numbers[2]} </h3>

 </div>
 `

//  Arrow Function

const doubleIt = x => x * 2;
const calculationSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread 

const ages = [12, 13, 14, 15];
const newAges = [...ages, 15, 17, 18];

// Destructuring

const { x, y, z, ...c } = { x: 12, y: 23, z: 43, name: 'Sakib', salary: 10000 };

const [a, b, ...r] = [12, 23, 34, 45, 56];






