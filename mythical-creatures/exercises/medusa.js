var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = []
    }
    gazeAtVictim(victim){
        var person = victim;
        var name = person.name;
        var statue = new Statue(name);
        this.statues.push(statue);

        if(this.statues.length > 3){
            var returnFromStone = this.statues[0]
            var rFSName = returnFromStone.name
            var reincarnation = new Person(rFSName);
            reincarnation.mood = "relieved"
            this.statues.shift();
            return reincarnation;
            }

 }
}


module.exports = Medusa;