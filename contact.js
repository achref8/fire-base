
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdsHVgQ6OPzHndTa7C7aazS05GgY_SPNo",
    authDomain: "go-my-code-855c6.firebaseapp.com",
    databaseURL: "https://go-my-code-855c6.firebaseio.com",
    projectId: "go-my-code-855c6",
    storageBucket: "",
    messagingSenderId: "4244973540",
    appId: "1:4244973540:web:41bb929e56adc54e2449f1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('myDatabase');
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   

    saveMessage(name,email, password );
}
document.getElementById('contactForm').addEventListener('submit', submitForm);


function saveMessage(name, email, password) {
    var newMessage = messagesRef.push();
    newMessage.set({
        name: name,
        email: email,
        password: password,
       
    });
}