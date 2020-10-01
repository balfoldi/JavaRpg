class Character {
  constructor(name){
    this.name = name
    this.status = "playing"
  }

  skill(){}
  
  attack(victim){
    this.dealDamage(victim, this.dmg)
  }
  
  takeDamage(dmg){
    this.hp -= dmg
    if(this.hp < 1){
      this.status = "loser"
    }
  }

  dealDamage(victim,dmg){
    victim.takeDamage(dmg)
    if(victim.status == "loser"){
      this.mana += 20
    }
  }

}