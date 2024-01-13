import { Player } from "./player";

export class Wizard extends Player {
     constructor(heroClass:'Маг',abilityName:'Заворожение',name:string) {
        super(heroClass,abilityName,name)
     }

    damage(player:Player):number{
        player.currentHealth -= (this.strength + player.tickDamage);
        return this.strength + player.tickDamage 
     }

     ability(player:Player) {
        player.stunned = true;
      
     }
}``