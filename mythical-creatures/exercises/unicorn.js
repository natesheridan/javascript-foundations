class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  }

  isWhite(){
    if (this.color === "white"){
      var isWhite = true
    }
    else {
      var isWhite = false
    }
    return isWhite
  }

  says(phrase){
    return `**;* ${phrase} *;**`
  }
}


module.exports = Unicorn;
