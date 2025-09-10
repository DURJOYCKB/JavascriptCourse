class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is Sleeping now `);
    }
}
const result = new Person('Troy', 25);
console.log(result);
result.sleep();