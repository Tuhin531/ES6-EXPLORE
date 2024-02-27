const numbers = [12, 13, 14, 15, 16];
var salary = 450;
salary = 455;
// console.log(salary);

// default parameter
function calculationSalary(salary, tax=.25, bonus=0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

const outPut = calculationSalary(10000);
\console.log(outPut);
