class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...");
    }

    eats(){
        console.log("khaa raha hoon");
    }
    jumps(){
        console.log("kood raha hoon");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("this is a lion...");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);