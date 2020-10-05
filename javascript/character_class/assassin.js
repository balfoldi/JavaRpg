class Assassin extends Character {
  type = "Assassin"
  description = "Smart and mercyless."
  skillName = "Shadow hit"
  skillDescription = "20 MANA : Deal 7 damages to target and can take any until next turn. Lose 7 damages if the target survive"
  skillVictim = true
  skillMana = 20

  
  skillActive = [false, false]
  
  hp = 6
  dmg = 7
  mana = 20
  
  skill(victim){
    if(this.mana >= 20){
      this.mana -= 20
      this.skillActive[0] = true
      this.dealDamage(victim, 7)
      if(victim.status != "loser"){
        this.dmg -= 7
        this.skillActive[1] = true
      }
    }else{
      alert("no enought mana")
    }
  }
  attack(victim){
    victim.takeDamage(this.dmg)
    if(victim.status == "loser"){
      this.mana += 20
    }
    if(this.skillActive[1]){
      this.dmg += 7
      his.skillActive[1] = false
    }
  }

  takeDamage(dmg){
    if(this.skillActive[0]){
      dmg = 0
    }
    super.takeDamage(dmg)
  }
}
