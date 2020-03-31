
function retrieveHighScore(){
    firebase.database().ref('SnakeScores/').once("value",setHighScore);
};
function setHighScore(scores){
    var scoresArray = [];
    var scoresJSON = scores.val();
    namesArray = Object.keys(scoresJSON);
    for (i=0; i < namesArray.length; i++){
        scoresArray.push(scoresJSON[namesArray[i]]['Score'])
    }
    console.log(scoresArray);
    console.log(namesArray);
    var user = localStorage.getItem('username')
    if (namesArray.indexOf(user) != -1){
        indexOfScore = namesArray.indexOf(user);
        localStorage.setItem("localHighScore",scoresArray[indexOfScore]);
    }
    logScore();
}
function logScore() {
    var scoreToLog = localStorage.getItem("localHighScore");
    var user = localStorage.getItem('username')
    firebase.database().ref('SnakeScores/' + user + '/').set({
        "Score": scoreToLog
    });
    firebase.database().ref('SnakeScores/').once("value",updateLeaderBoard);
};
function updateLeaderBoard(scores){
    var scoresArray = [];
    var scoresJSON = scores.val();
    namesArray = Object.keys(scoresJSON);
    for (i=0; i < namesArray.length; i++){
        scoresArray.push(scoresJSON[namesArray[i]]['Score'])
    }
    var sortedScores = [];
    var sortedNames = [];
    var length = scoresArray.length;
    for (i=0; i < length; i++){
        topNumber = Math.max.apply(null, scoresArray);
        topNumber = topNumber.toString();
        topIndex = scoresArray.indexOf(topNumber);
        topName = namesArray[topIndex];
        sortedScores.push(topNumber);
        sortedNames.push(topName);
        scoresArray.splice(topIndex, 1);
        namesArray.splice(topIndex,1);
    };
    //console.log(sortedNames);
    //console.log(sortedScores);
    document.getElementById("name1").innerHTML = sortedNames[0];
    document.getElementById("score1").innerHTML = sortedScores[0];
    document.getElementById("name2").innerHTML = sortedNames[1];
    document.getElementById("score2").innerHTML = sortedScores[1];
    document.getElementById("name3").innerHTML = sortedNames[2];
    document.getElementById("score3").innerHTML = sortedScores[2];
    document.getElementById("name4").innerHTML = sortedNames[3];
    document.getElementById("score4").innerHTML = sortedScores[3];
    document.getElementById("name5").innerHTML = sortedNames[4];
    document.getElementById("score5").innerHTML = sortedScores[4];
};
