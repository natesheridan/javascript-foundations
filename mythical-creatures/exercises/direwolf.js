
class Direwolf{
    constructor(name, home = "Beyond the Wall", size = "Massive"){
        this.name = name;
        this.home = home
        this.size = size
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;

    }

    protect(StarkInstance){
        if (StarkInstance.location === this.home && this.starksToProtect.length < 2){
            StarkInstance.safe = true;
            this.huntsWhiteWalkers = (!this.starksToProtect.length===0)
            this.starksToProtect.push(StarkInstance);
        }
    }
    leave(StarkInstance){

        var starkName = StarkInstance.name
        for (var i = 0 ; i <this.starksToProtect.length ; i++){
            if (this.starksToProtect[i].name === starkName){
                this.starksToProtect[i].safe = false
                this.starksToProtect.splice(i, 1)
            }

        }
    }

}




module.exports = Direwolf;