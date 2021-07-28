
class Centaur{
    constructor(centaur){
        this.centaur = centaur;
        this.name = centaur.name; 
        this.breed = centaur.type;
        this.standing = true
        this.layingDown = false
        this.crankyCounter = 0;
        this.cranky = false
    }

    shootBow(){
        console.log("shoot")
        this.crankyCounter++;

        if(this.crankyCounter >= 3 || this.layingDown){
            this.cranky = true
            return `NO!`
        }

        return `Twang!!!`
    }


    run(){
        console.log("run")
        this.crankyCounter++

        if(this.crankyCounter >= 3 || this.layingDown){
            this.cranky = true
            return `NO!`
        }
        
        return `Clop clop clop clop!!!`
    }

    sleep(){
        if(this.standing){
            return `NO!`
        }
        else if (!this.standing){
            this.cranky = false;
            this.crankyCounter = 0;
            return `ZZZZ`
        }
    }

    layDown(){
        this.standing = false;
        this.layingDown = true;
    }

    standUp(){
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion(){
        if (this.standing){
            this.crankyCounter = 0;
            this.cranky= false
        }
        else{
            return 'Not while I\'m laying down!';
        }
    }
}


module.exports = Centaur;