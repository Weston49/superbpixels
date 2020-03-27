
document.addEventListener('DOMContentLoaded', function()  {
    var config = {
        apiKey: "AIzaSyCkDuKow11BvAZa97WYcg-cCt3yWOyFf20",
        authDomain: "https://superbpixel.firebaseapp.com",
        databaseURL: "https://superbpixel.firebaseio.com",
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    
      // Get a reference to the database service
      var database = firebase.database();


      try{
          let app = firebase.app();
          let features = ['auth', 'databse', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
          console.log('Successful connection');
      }catch (e) {
          console.error(e);
          console.log("error");
      }
});
 