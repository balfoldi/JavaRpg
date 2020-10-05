class Paladin extends Character {
  type = "Paladin"
  description = "Strong knight with hight defence."
  skillName = "Healing Light"
  skillDescription = "40 MANA Deal 4 damages then heal himself for 5 hp"
  skillVictim = true
  skillMana = 40
  
  hp = 16
  dmg = 3
  mana = 160

  skill(victim){
    if(this.mana >= 40){
      this.hp += 5
      this.mana -= 40
      this.dealDamage(victim, 4)
      return;
    }
    alert("no enought mana")
  }
}