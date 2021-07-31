const Direwolf = require('./direwolf');
class Stark{
    constructor(object = {}){
        this.name = object.name || "Bran";
        this.location = object.area || "Winterfell";
        this.safe = false
    }
    sayHouseWords(){
        if (!this.safe){
            return `Winter is Coming`;
        }
        else if (this.safe){
            return `The North Remembers`
        }
    }
    callDirewolf(direName, direHome){
        var newDirewolf =  new Direwolf(direName, this.location)
        newDirewolf.protect(this);
        return newDirewolf;
    }
}

module.exports = Stark;