
function checkUser(){
    document.getElementById("message").innerHTML = "Works better on desktop! Mobile functionality coming later!";
    var user = firebase.auth().currentUser;
    if (user.displayName == null){
        console.log("no user")
    }else{
        document.getElementById("user").innerHTML = "Welcome back " + user.displayName;
    }
    localStorage.setItem("username", user.displayName); 
}
