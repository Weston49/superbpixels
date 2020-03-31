
function checkUser(){
    
    var user = firebase.auth().currentUser;
    if (user.displayName == null){
        console.log("no user")
    }else{
        document.getElementById("user").innerHTML = "Welcome back " + user.displayName;
    }
    localStorage.setItem("username", user.displayName); 
}
