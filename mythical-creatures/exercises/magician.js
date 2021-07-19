console.log('magician test')

class Magician {
    constructor(properties){
        this.properties = properties;
        this.name = `The Great ${this.properties.name}`;
        this.assistant = this.properties.assistant;
        this.favoriteAccessory = 'top hat';
        if (this.properties.clothing) {
            this.favoriteAccessory = this.properties.clothing;
        }
        this.confidencePercentage = 10
    }
    performIncantation(string){
        this.string = string
        var msg = `${string.toUpperCase()}!`;
        return msg
    }
    performTrick(){
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === 'top hat'){
        return `PULL RABBIT FROM TOP HAT`
        }
        else {
            return 'PULL DOVE FROM SLEEVE'
        }      
    }
    performShowStopper(){
        if (this.confidencePercentage>99 && this.assistant){
            return 'WOW! The magician totally just sawed that person in half!'
        }
        else {
            return 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician;