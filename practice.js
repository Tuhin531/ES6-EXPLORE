const numbers = [12, 13, 14, 15, 16];
var salary = 450;
salary = 455;
// console.log(salary);

// default parameter
function calculationSalary(salary, tax = .25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// const outPut = calculationSalary(10000);
// console.log(outPut);


// template string

const elementHtml = `
<div>
<h3> Name: </h3>
<h3> Address: </h3>
<h3> Salary: ${calculationSalary(10000, 0, 0)} </h3>
<p> Others: </p>

</div>
`
// console.log(elementHtml );

// Arrow function

// const doubleIt = x => x * 2;
// const calculationSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread
const ages = [12, 13, 14, 15];
const newAges = [...ages, 17,18];
console.log(newAges);

// destruction

const {x,y,z, ...c}= {x:12,y:13, z:17, name:'sakib', salary:1000}
const [a,b, ...r] =[12,13,14,15,16,17];