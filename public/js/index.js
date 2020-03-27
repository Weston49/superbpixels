function loadUsernameBox(){
    if (localStorage.getItem("username") == null){
        document.getElementById("userInfo").innerHTML = "Input name to save highscores!<br><input type='text' id='name' placeholder='Username'><button onclick='submitName()'>Submit</button>"
    }
}
function submitName(){
    localStorage.setItem("username", document.getElementById("name").value)
    window.open("index.html", '_top');
}