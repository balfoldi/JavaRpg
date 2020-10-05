class Draw {
  constructor(game){
    this.game = game
  }
  
  stats(){
    this.game.characters.map((character) =>{
      this.unactivateCharacter(character)
      document.querySelector('#start_button').innerHTML = this.game.roundLeft
      this.getCard(character.type).querySelector("#status").innerHTML = `<h4 class='m-0'>${character.name}</h4><p class='m-0 text-secondary'>${character.type}<p class='m-0'><b>HP=></b>${character.hp}</p><p class='m-0'><b>Mana=></b>${character.mana}</p><p class='m-0'><b>Damages=></b>${character.dmg}</p>`
      if(character.status != "playing"){
        console.log(character.type + " is dead")
        this.game.characters = this.game.characters.filter((livings)=>{
          return livings != character
        })
        this.getCard(character.type).querySelector("img").src = `avatar/dead.jpeg`
      }
    })
  }

  init(){
    this.game.characters.map((character) => {
      this.getCard(character.type).querySelector("img").src = `avatar/${character.type.toLowerCase()}.jpeg`
      this.getCard(character.type).querySelector(".card-footer").innerHTML = `<i>${character.skillDescription}</i>`
    })
  }
  
  getCard(type){
    return document.getElementById(type)
  }
  
  activateCharacter(character){
    let buttons = this.getCard(character.type).querySelector(".action_field").children
    this.getCard(character.type).querySelector(".card-header").classList.add("bg-warning")
    buttons[0].classList.add("btn-info")
    buttons[0].classList.remove("btn-secondary")
    let clickAttack = () => {
      buttons[0].removeEventListener("click", clickAttack)
      game.draw.targets(character,false)
    }
    buttons[0].addEventListener("click", clickAttack)
    if(character.skillMana <= character.mana){
      console.log("skille is aviable")
      buttons[1].classList.add("btn-primary")
      buttons[1].classList.remove("btn-secondary")
      let clickSkill = () => {
        buttons[0].removeEventListener("click", clickSkill)
        game.draw.targets(character,true)
      }
      buttons[1].addEventListener("click", clickSkill)
    }
  }

  targets(letAttacker, letSkill){
    const skill = letSkill
    const attacker = letAttacker
    const targets = this.game.characters.filter((character)=>{return character != attacker && character.status === "playing"})
    if(skill){
      if(!attacker.skillVictim){
        attacker.skill()
        this.endTurn()
        return
      }
    }
    targets.map((character) => {
      let clickTarget = () => {
        targets.map((character) => {
          this.getCard(character.type).querySelector("img").classList.remove("rounded-circle", "btn", "btn-danger")
          let imgWithEvent = this.getCard(character.type).querySelector("img")
          let imgNoEvent = imgWithEvent.cloneNode(true)
          imgWithEvent.parentNode.replaceChild(imgNoEvent, imgWithEvent)
        })
        console.log(attacker.type + " attack " + character.type)
        if(skill){
          attacker.skill(character)
        }else{
          attacker.attack(character)
        }
        game.draw.endTurn()
      }
      this.getCard(character.type).querySelector("img").classList.add("rounded-circle", "btn", "btn-danger")
      this.getCard(character.type).querySelector("img").addEventListener("click", clickTarget)
    })
  }



  unactivateCharacter(character){
    let buttons = this.getCard(character.type).querySelector(".action_field").children
    this.getCard(character.type).querySelector(".card-header").classList.remove("bg-warning")
    buttons[1].classList.remove("btn-primary")
    buttons[1].classList.add("btn-secondary")
    buttons[0].classList.add("btn-secondary")
    buttons[0].classList.remove("btn-info")    
    buttons[1].removeEventListener("click", ()=>{})
  }

  endTurn(){
    this.stats()
    this.game.playTurn()
  }

}