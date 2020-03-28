
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
    console.log(sortedNames);
    console.log(sortedScores);
};
