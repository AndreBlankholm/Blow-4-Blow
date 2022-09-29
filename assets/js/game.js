// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your players name?");
var playerAttack = 20;
var playerHealth = 100;
var playerMoney = 10;


window.alert( "Your players name is "+ playerName);
window.alert("Welcome to Blow 4 Blow, it's the fight of your life " + playerName + "! Choose your choice on the next prompt wisley.");


console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Big Mook", "LIL Sam", "The big Boss"];
var enemyAttack = 12;
var enemyHealth = 50;

//console.log(enemyNames,enemyAttack,enemyHealth);



var fight = function(enemyName) {
    // Alert players that they are starting a new round
   

    var promptFight = window.prompt("Would you lik to Fight or Skip this battle?  Enter 'Fight' or 'Skip' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        window.alert(" Your fighting " + enemyName + " and I dont think its a smart thing to do " + playerName + "! Fight Like your life depended on it!");
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
      
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
      
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");

        var confirmSkip = window.confirm("Are you sure you want to skip?");
        
        if (confirmSkip) {
            window.alert("Player has choosen to skip this round.");
            playerMoney = playerMoney - 5;
            console.log(playerHealth,playerMoney);
            window.alert(playerName + " has " + playerMoney + " Worth of money remaining.");
        } else {
            fight();
        }
        
      } else {
        window.alert("You need to choose a valid option. Try again!");
        
      }
};





for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}