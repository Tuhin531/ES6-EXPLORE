const numbers = [1, 2, 4, 6, 8, 20]
const half = numbers.map(n => n / 2);
const third = numbers.map(n => n / 3);

// console.log(half);
// console.log(third);

const friends = ['David Milar', 'Salsabil', 'Akash', 'Asif'];
const firstLatter = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
console.log(firstLatter );
console.log(nameLength);