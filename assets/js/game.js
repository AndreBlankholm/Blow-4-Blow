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
        window.alert("Player has chosen to skip this round.");
        window.alert(playerName + " has chosen to skip the fight.  Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log(playerHealth,playerMoney);
        window.alert(playerName + " has " + playerMoney + " Worth of money.");
        break;
      } 
    } 
    // place fight function code block here . . .
    
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "f" || promptFight === "F") {

      // generate random damage value based on player's attack power
      var damage = randomNumberGen(playerAttack - 3, playerAttack);

      enemyHealth = Math.max(0, enemyHealth - damage);

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

      var damage = randomNumberGen(enemyAttack - 3, enemyAttack);

      playerHealth = Math.max(0, playerHealth - damage);

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

var startGame = function() {

  //at the start of the game I need to reset the theplayer stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0) {
       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Blow-4-Blow! Round " + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
      window.alert(" Your fighting " + enemyNames[i] + " and your have " + playerMoney + " worth of money so fight or skip like your life depended on it " + playerName + " !");
      // reset enemyHealth before starting new fight
      enemyHealth = randomNumberGen(40, 60);
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      //enter shop if there is still room on enemy array
      if (playerHealth > 0 && i < enemyNames.length - 1 && playerMoney >= 7) {

        var storeConfirm = window.confirm(" Do you want to enter the shop before the next round to upgrade?");
        
        if (storeConfirm) {
          shop();
        }
      }

    } else {
      window.alert(" You have lost and got whooped and now the game is over!");
      break;
    }
  }
  endGame();
};

var endGame = function() {

  if (playerHealth > 0) {
    window.alert("Great job, you survived the game! You know have a score of " + playerHealth + " .");

  } else {
    window.alert("The game has ended. Let's see how you did!");
  }

  var playAgainConfirm = window.confirm( "Would you like to play again?")

  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert(" Thank you " + playerName + " for playing the best windows pop up game ever made, Blow-4-Blow! Please come back and play again anytime.");
  }
};


var shop = function() {

  var optionWhenShoppingPrompt = window.prompt(" Would you like to REFILL your Health, UPGRADE your attack, or LEAVE the Store? Please enter one: 'HEALTH', 'ATTACK', or 'LEAVE' to make a choice.");

  switch (optionWhenShoppingPrompt) {
    case "health":
    case "HEALTH":
    case "h":
    case "H":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
  
        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;

      } else {
        window.alert("You dont have enough money, sorry!")
      }
      
      break;

    case "attack":
    case "ATTACK":
    case "a":
    case "A":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;

    case "leave":
    case "LEAVE":
    case "l":
    case "L":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();

      break;
  }
};

// just adding the randomization of numbers function anywhere in this file. perferrably at the bottom
var randomNumberGen = function() {
var value = Math.floor(Math.random() * 21) + 40;
return value;
};

startGame();