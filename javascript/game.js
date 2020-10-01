class Game {
  constructor(){
    this.roundLeft = 10
    this.characters = [
      new Fighter("Grace"),
      new Paladin("Ulder"),
      new Monk("Moana"),
      new Berzerker("Draven"),
      new Assassin("Carl")
    ]
    this.nextActiveCharacterId = 1
    this.draw = new Draw(this)
    this.draw.stats()
    this.draw.init()
    this.draw.activateCharacter(this.characters[this.nextActiveCharacterId-1])
  }

  playTurn(){
    if(this.roundLeft > 0){
      if(this.nextActiveCharacterId === 0){
        this.draw.unactivateCharacter(this.characters[this.characters.length - 1])  
      }else{
        this.draw.unactivateCharacter(this.characters[this.nextActiveCharacterId - 1])  
      }
    }else{
      alert("END")
    }

    console.log(this.nextActiveCharacterId + " = " + (this.characters.length-1))
    this.draw.activateCharacter(this.characters[this.nextActiveCharacterId])
    
    if(this.nextActiveCharacterId >= this.characters.length-1){
      this.roundLeft--
      this.nextActiveCharacterId = 0
    }else{
      this.nextActiveCharacterId += 1
    }
  }
}