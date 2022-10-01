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

var enemyNames = ["Big Mook", "LIL Sam", "The Big Boss"];
var enemyAttack = 12;
var enemyHealth = 50;

//console.log(enemyNames,enemyAttack,enemyHealth);



var fight = function(enemyName) {
   // both enemy and player must both have health inorder to fight
  while(enemyHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you lik to Fight or Skip this battle?  Enter 'Fight' or 'Skip' to choose.");
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you want to skip?");

      if (confirmSkip) {
        window.alert("Player has choosen to skip this round.");
        window.alert(playerName + " has chosen to skip the fight.  Goodbye!");
        playerMoney = playerMoney - 20;
        console.log(playerHealth,playerMoney);
        window.alert(playerName + " has " + playerMoney + " Worth of money remaining.");
        break;
      } 
    } 
    // place fight function code block here . . .
    
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "f" || promptFight === "F") {
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      window.alert(" Your fighting " + enemyName + " and your have " + playerMoney + " worth of money so " + playerName + " fight Like your life depended on it!");
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
    
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        playerMoney = playerMoney + 20;
      }
    
      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;

      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;

      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // if player choses to skip
    } else {
      window.alert("You need to choose a valid option. Try again!");
      
    }
  }
};


// this for loop lets me access every index in the array of (enemyNames)
// and resets enemy health to 50

for(var i = 0; i < enemyNames.length; i++) {
  enemyHealth = 50;
  alert("Next up is " + enemyNames[i] + "!");
  fight(enemyNames[i]);
}