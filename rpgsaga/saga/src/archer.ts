import { Player } from "./player";

export class Archer extends Player {
     constructor(heroClass:'Лучник',abilityName:'Огненные стрелы',name:string) {
        super(heroClass,abilityName,name)
     }

    damage(player:Player):number{
        player.currentHealth -= (this.strength + player.tickDamage);
        return this.strength + player.tickDamage 
     }

     ability(player:Player):number {
        if (this.useAbility) {
            this.damage(player)
            return this.damage(player)
        } else {
            this.useAbility = true;
            player.tickDamage = 1.5;
            return 0
        }
     }
}