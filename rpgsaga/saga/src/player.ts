import { randomNumber } from "./randomNumber";

export abstract class Player {
    name:string;
    health:number;
    currentHealth:number;
    tickDamage:number;
    strength:number;
    abilityName:string;
    heroClass:string;
    useAbility=false;
    stunned = false;


    readonly healthPoint = [50,75,100];

    constructor(name: string,heroClass:string, abilityName) {
        this.name = name;
        this.heroClass = heroClass;
        this.abilityName = abilityName;
        this.tickDamage = 0;
        this.strength = randomNumber(2, 25);
        this.health =  this.healthPoint[randomNumber(0,this.healthPoint.length-1)];
    }
    abstract ability(player:Player);
    abstract damage(player:Player);
}