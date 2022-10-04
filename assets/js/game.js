// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// just adding the randomization of numbers function anywhere in this file. perferrably at the bottom
var randomNumberGen = function() {
  var value = Math.floor(Math.random() * 21) + 40;
  return value;
  };
  

var playerInfo = {
  name: window.prompt(" Welcom to BLOW-4-BLOW!   What is your player's name?"),
  health: 100,
  attack: 10,
  money:20
};

window.alert( "Your players name is "+ playerInfo.name);


var enemyInfo = [
  {
    name: 'Big Mook',
    attack: randomNumberGen(10, 14)
  },
  {
    name: 'lil Sam',
    attack: randomNumberGen(10, 14)
  },
  {
    name: 'Big Boss The Great',
    attack: randomNumberGen(10, 14)
  }
];

//console.log(enemyNames,enemyAttack,enemyHealth);



var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
      }
    }

    // generate random damage value based on player's attack power
    var damage = randomNumberGen(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumberGen(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } // end of while loop
}; // end of fight function


// this for loop lets me access every index in the array of (enemyNames)
// and resets enemy health to 50

var startGame = function() {

  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  for(var i = 0; i < enemyInfo.length; i++) {

    if (playerInfo.health > 0) {
       // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Blow-4-Blow! Round " + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyObj = enemyInfo[i];
      
      
      // reset enemyHealth before starting new fight
      pickedEnemyObj.health = randomNumberGen(40, 60);
      
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyObj);
      
      //enter shop if there is still room on enemy array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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

  if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! You know have a score of " + playerInfo.health + " .");

  } else {
    window.alert("The game has ended. Let's see how you did!");
  }

  var playAgainConfirm = window.confirm( "Would you like to play again?")

  if (playAgainConfirm) {
    //restart game
    startGame();
  } else {
    window.alert(" Thank you " + playerInfo.name + " for playing the best windows pop up game ever made, Blow-4-Blow! Please come back and play again anytime.");
  }
};


var shop = function() {

  var optionWhenShoppingPrompt = window.prompt(" Would you like to REFILL your Health, UPGRADE your attack, or LEAVE the Store? Please enter one: 'HEALTH', 'ATTACK', or 'LEAVE' to make a choice.");

  switch (optionWhenShoppingPrompt) {
    case "health":
    case "HEALTH":
    case "h":
    case "H":
      if (playerInfo.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
  
        // increase health and decrease money
        playerInfo.health = playerInfo.health + 20;
        playerInfo.money = playerInfo.money - 7;

      } else {
        window.alert("You dont have enough money, sorry!")
      }
      
      break;

    case "attack":
    case "ATTACK":
    case "a":
    case "A":
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money - 7;
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


startGame();