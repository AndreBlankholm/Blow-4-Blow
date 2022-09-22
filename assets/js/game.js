var playerName = window.prompt("What is your players name?");
var playerAttack = 20;
var playerHealth = 100;



window.alert( "Your players name is "+ playerName);
window.alert("Welcome to the fight of your life " + playerName + "!");


console.log(playerName, playerAttack, playerHealth);

var enemyName = "Big Sam";
var enemyAttack = 12;
var enemyHealth = 50;

console.log(enemyName,enemyAttack,enemyHealth);

var fight = function() {
    // Alert players that they are starting a new round
    window.alert(" Your fighting BIG SAM " + playerName + "! Fight Like your life depended on it so FIGHT!!");

    playerHealth = playerHealth - enemyAttack;
    enemyHealth = enemyHealth - playerAttack;

    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
      );
      
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};





fight();