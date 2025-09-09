class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching English');
    }
}
const tapan = new Teacher('Tapan sir', 'English');
console.log(tapan);