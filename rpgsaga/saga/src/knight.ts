import { Player } from "./player";

export class Knight extends Player {
      strengthMultiplier = 1;
     constructor(heroClass:'Рыцарь',abilityName:'Удар возмездия',name:string) {
        super(heroClass,abilityName,name)
     }

   damage() {
      
      const resultStrength = this.strength * this.strengthMultiplier;
      return Math.floor(resultStrength)
      
    }
    ability() {
        this.strengthMultiplier = 1.3;
    }
}
