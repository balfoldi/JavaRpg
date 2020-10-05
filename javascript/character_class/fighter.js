class Fighter extends Character {
  type = "Fighter"
  description = "A ballanced warrior on all sides."
  skillName = "Dark Vision"
  skillDescription = "20 MANA : Deal 5 damage to target and take half damages for one turn."
  skillVictim = true
  skillMana = 20


  skillActive = false
  
  hp = 12
  dmg = 4
  mana = 20

  skill(victim){
    if(this.mana >= 20){
      this.mana -= 20
      this.skillActive = true
      this.dealDamage(victim, 5)
      return;
    }
    alert("no enought mana")
  }

  attack(victim){
    this.skillActive = false
    this.dealDamage(victim, this.dmg)
  }

  takeDamage(dmg){
    if(this.skillActive){
      dmg /= 2
    }
    super.takeDamage(dmg)
  }

}