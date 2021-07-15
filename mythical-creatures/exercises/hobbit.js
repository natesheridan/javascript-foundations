    console.log("Hobbit Test");
    
    class Hobbit{
        constructor(hobbitObject){
        this.hobbitObject = hobbitObject;
        this.name = hobbitObject.name;
        this.age = 0;
        this.adult = false
        this.old = false
        this.hasRing = false
        // this.adult = this.age > 32
        }

        celebrateBirthday(){
            this.age = this.age+1
            if (this.age > 32){
                this.adult = true
            }
            if (this.age > 100){
                this.old = true
            }
            // console.log(this.age)
            // console.log(this.adult)
        }
        
        getRing(){
            if (this.name === "Frodo"){
                this.hasRing = true;
                return `Here is the ring!`
            }
            else {
                return `You can\'t have it!`
            }
        }
    }

module.exports = Hobbit;