
var firebaseConfig = {
      apiKey: "AIzaSyCKlXfxTOilbOVOG7vXZjN1jDgofAvvOhQ",
      authDomain: "kwitter-d9c8c.firebaseapp.com",
      databaseURL: "https://kwitter-d9c8c-default-rtdb.firebaseio.com",
      projectId: "kwitter-d9c8c",
      storageBucket: "kwitter-d9c8c.appspot.com",
      messagingSenderId: "389585560373",
      appId: "1:389585560373:web:b2720d8c9aa5c121d7e27c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"

        });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_page.html";
  }
  function getData()
   {
         firebase.database().ref("/").on('value', function(snapshot)
          {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot)
                 {
                       childKey  = childSnapshot.key;
                        Room_names = childKey;
      //Start code
      console.log("Room Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
