class Dragon{
    constructor(name , rider) {
        this.name = name;
        this.rider = rider;
        this.hunger = 0;
        this.hungry = true;
    }

    greet(){
        return `Hi, ${this.rider}!`
    }

    eat(){
        this.hunger = this.hunger+1;
        if (this.hunger > 2) {
            this.hungry = false
        }
    }
    
};


module.exports = Dragon;