
const firebaseConfig = {
      apiKey: "AIzaSyDxrMDLlhBUW1dXKcbdz-7aVVyVOqt2fts",
      authDomain: "kwitter-e44df.firebaseapp.com",
      databaseURL: "https://kwitter-e44df-default-rtdb.firebaseio.com",
      projectId: "kwitter-e44df",
      storageBucket: "kwitter-e44df.appspot.com",
      messagingSenderId: "562445922168",
      appId: "1:562445922168:web:bcaa0161af805bccbe228d",
      measurementId: "G-379YB0D3V2"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";
    function addRoom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function reDiRect(name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}