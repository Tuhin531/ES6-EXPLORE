const users = [{ id: 1, name: 'sakib', job: 'doctor' }]

// console.log(users[0].name);

const data = {
    count: 500,
    data: [{ id: 1, name: 'sakib', job: 'doctor' },
          { id: 2, name: 'sumon', job: 'teacher' }]
}

// console.log(data.data[0].job);


const  user = {

    id: 1,
    name: ' sakib',
    address: {
        street : {
            road: 'MirPur',
            block: 'A',
            Section: 11
        },
        postoffice: 'Cantonment' ,
        city: 'Dhaka'
    }
     

}
//  we need only section
// if i make object name error the  continue code use ?. 
const outPut= user.address?.stret?.Section;
console.log(outPut);