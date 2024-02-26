class Instructor {
    name;
    designation = 'Teacher'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSection(time){
        console.log(`work in the night shift at ${time}`)
    }
    createQuiz(number){
        console.log(`make a quiz for article ${number}`)
    }
}
const Amir = new Instructor('amir', 'mumbai');
console.log(Amir);
Amir.startSupportSection('4.00');
Amir.createQuiz('4');
const solaiman = new Instructor('solaiman', 'Dhaka');
console.log(solaiman);
