import { randomNumber } from "./getRandomNumber";

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

    constructor(name: string,heroClass:string, ability) {
        this.name = name;
        this.heroClass = heroClass;
        this.ability = ability;
        this.tickDamage = 0;
        this.strength = randomNumber(2,25);
        this.health =  this.healthPoint[randomNumber(0,this.healthPoint.length-1)];
    }
}