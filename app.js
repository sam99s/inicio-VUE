new Vue({
    el:'#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function(){
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.gameIsRunning = true
        },
        attack: function(){
            let max = 10;
            let min = 3;
            let damage = Math.max(math.floor(Math.random() * max) + 1, min)
            this.monsterHealth -= damage

            max = 12;
            min = 5;
            damage = Math.max(math.floor(Math.random() * max) + 1, min)
            this.playerHealth -= damage
            
        },
        specialAttack: function(){
            
        },
        heal: function(){
            
        },
        giveUP: function(){
            
        },
    }
})