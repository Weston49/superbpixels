var upDown = false;
var enemyTime = 0;
var score = 10000;
function setup() {
    let player = new Sprite(
      resources["./covidImages/shoppingMan.png"].texture);
        player.x = 70;
        player.y = 70;
        player.vx = 0;
        player.vy = 0;
        player.turn = 0;
        player.anchor.x = 0.5;
        player.anchor.y = 0.5;
        player.angle = 0;
        player.scale.x = 0.2;
        player.scale.y = 0.2;
    let enemy = new Sprite(
      resources["./covidImages/enemy.png"].texture);
        enemy.x = 400;
        enemy.y = 200;
        enemy.scale.x = 0.8;
        enemy.scale.y = 0.8;
        enemy.circluar = true;
    let bread = new Sprite(
        resources["./covidImages/bread.png"].texture);
    bread.x = 75;
    bread.y = 75;
    bread.scale.x = 0.17;
    bread.scale.y = 0.17;
    let left = keyboard("ArrowLeft"),
        up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        down = keyboard("ArrowDown");
//creating the board
        app.stage.addChild(wall);
        app.stage.addChild(player);
        app.stage.addChild(enemy);
        app.stage.addChild(bread);

   //Left arrow key `press` method
   left.press = () => {
    player.turn = -3.5;
   };
  
  //Left arrow key `release` method
  left.release = () => {
    if (!right.isDown) {
      player.turn = 0;
    }
  };


  //Up
  up.press = () => {
    upDown = true;
  };
  up.release = () => {
    if (!down.isDown) {
      player.vy = 0;
      player.vx = 0;
      upDown = false;
    }
  };


  //Right
  right.press = () => {
    player.turn = 3.5;
  };
  right.release = () => {
    if (!left.isDown) {
      player.turn = 0;
    }
  };


  /*Down
  down.press = () => {
    player.vy = 5;
    player.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && player.vx === 0) {
      player.vy = 0;
    }
  };*/



  //Set the game state
  state = play;
 
  //Start the game loop 
  app.ticker.add(delta => gameLoop(delta,player,enemy,bread));
  
};


function gameLoop(delta,player,enemy,bread){

  //Update the current game state:
  state(delta,player,enemy,bread);
};

function play(delta,player,enemy,bread) {
    //console.log(player.x)
    if (upDown == true){
        player.vy = Math.sin(player.rotation) * 5;
        player.vx = Math.cos(player.rotation) * 5;
    }else{
        player.vy = 0;
        player.vx = 0;
    }

    player.x = player.x + player.vx;
    player.y = player.y + player.vy;
    player.angle = player.angle + player.turn;
    //console.log(player.angle);
    if (b.hit(player, wall, true, true)) {
        wall.tint = 0xff3300
      } else {
        wall.tint = 0xccff99
      }
    if(b.hit(player,enemy,true,true)){
        console.log("You hit a person")
        score = score - 10;
    }
    scoreDisplay.text = "Score:" + score
    if (b.hit(player,bread)){
        bread.x = randomInt(10,760)
        bread.y = randomInt(10,340)
        score+= 100;
    }
    moveEnemy(enemy);
};

function moveEnemy(enemy){
    enemyTime++;
    if (enemyTime >= 200){
        enemyTime = 0;
    }
    if (enemyTime <= 100){
        enemy.y--;
    }else{
        enemy.y++;
    }
}