import { Player } from "./player";

export class Knight extends Player {
     constructor(heroClass:'Лучник',abilityName:'Огненные стрелы',name:string) {
        super(heroClass,abilityName,name)
     }

     dealDamage(player:Player):number{
        player.currentHealth -= (this.strength + player.tickDamage);
        return this.strength + player.tickDamage 
     }

     ability(player:Player):number {
        if (this.useAbility) {
            this.dealDamage(player)
            return this.dealDamage(player)
        } else {
            this.useAbility = true;
            player.tickDamage = 1.5;
            return 0
        }
     }
}