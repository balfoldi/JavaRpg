class Berzerker extends Character {
  type = "Berzerker"
  description = "A bull with hight attack."
  skillName = "Rage"
  skillDescription = "0 MANA : Win 1 dammage at the cost of 1 hp"
  skillVictim = false
  skillMana = 0

  hp = 8
  dmg = 4
  mana = 0
  
  skill(){
    this.hp -= 1
    this.dmg += 1
  }
}