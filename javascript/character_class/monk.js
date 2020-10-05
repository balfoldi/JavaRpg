class Monk extends Character {
  type = "Monk"
  description = "A priest that can heal."
  skillName = "heal"
  skillDescription = "25 MANA Heal himself for 8 hp"
  skillVictim = false
  skillMana = 25

  hp = 8
  dmg = 2
  mana = 200
  
  skill(){
    if(this.mana >= 25){
      this.mana -= 25
      this.hp += 8
      return;
    }
    alert("no enought mana")
  }
}