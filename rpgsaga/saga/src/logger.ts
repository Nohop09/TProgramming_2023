import { Player } from "./player";

export class Logger{
    static roundCounter(roundCounter: number){
        console.log(`Кон ${roundCounter}`)
    }

    static announcementPlayer(firstPlayer: Player, secondPlayer: Player){
        console.log(`${firstPlayer.name} - ${firstPlayer.PlayerType} (Сила: ${firstPlayer.strength}, Здоровье:${firstPlayer.curHealth} ) против ${secondPlayer.name} - ${secondPlayer.PlayerType} (Сила: ${secondPlayer.strength}, Здоровье:${secondPlayer.curHealth} )` )
    }

    static stunned(Player: Player){
        console.log(`${Player.name} - ${Player.PlayerType} пропускает ход`)
    }

    static useAbility(firstPlayer: Player, secondPlayer: Player, damage: number){
        console.log(`${firstPlayer.name} - ${firstPlayer.PlayerType} применяет ${firstPlayer.abilityName} и нанонсит урон в размере ${damage} единиц противнику ${secondPlayer.name} - ${secondPlayer.PlayerType}`)
    }

    static dealDamage(firstPlayer: Player, secondPlayer: Player, damage: number){
        console.log(`${firstPlayer.name} - ${firstPlayer.PlayerType} нанонсит урон в размере ${damage} единиц противнику ${secondPlayer.name} - ${secondPlayer.PlayerType}`)
    }

    static PlayerDeath(Player: Player){
        console.log(`${Player.name} - ${Player.PlayerType} погиб`)
    }

    static burning(Player: Player){
        console.log(`${Player.name} - ${Player.PlayerType} получает урон в размере ${Player.tickDamage} единиц`)
    }
}