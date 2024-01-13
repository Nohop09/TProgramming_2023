import { Player } from './player';
import { Archer } from './archer';
import { Knight } from './knight';
import { Wizard } from './wizard';
import { randomNumber } from './randomNumber';

export class Game {
    playerAmount:number
    players:Player[] = []

    readonly names = ['эльриан', 'ариэль', 'финрод', 'сильвия', 'арис', 'громм', 'дуршак', 'гарр', 'зог', 'голдан', 'тинк', 'гизмо',
     'рустам', 'меккаторк', 'клавдия', 'лилит', 'некросис', 'валентин', 'акелла', 'мортис', 'фаэлис', 'горгондор', 'дракулон', 
     'эмералдос', 'шенралас', 'виктория']
    constructor(playerAmount:number) {
        this.playerAmount = playerAmount

        for (let i = 0;i< playerAmount;i++) {
            const playerType = Math.floor(Math.random() * 3);
            let player:Player
            if (playerType === 0) {
                player = new Wizard(this.names[randomNumber(0,this.names.length)])
                this.players.push(player)
            } else if(playerType === 1) {
                player = new Knight(this.names[randomNumber(0,this.names.length)])
                 this.players.push(player)
            } else (playerType === 2) {
                player = new Archer(this.names[randomNumber(0,this.names.length)])
                 this.players.push(player)
            } 
        }
    }
    roundStart(){
        let roundCounter = 1

        while (this.players.length > 1) {
            Logger.roundCounter(roundCounter)

            let win: Hero[]-[]

            for (let i = 0;i < this.players.length - 1;i+=2) {
                
            }
        }
    }
}
