const firebaseConfig = {
    apiKey: "AIzaSyD0JJS5XwLcahOJW5J0hztX_Ila2GYL-ek",
    authDomain: "supermarket-af419.firebaseapp.com",
    databaseURL: "https://supermarket-af419-default-rtdb.firebaseio.com",
    projectId: "supermarket-af419",
    storageBucket: "supermarket-af419.appspot.com",
    messagingSenderId: "65288925001",
    appId: "1:65288925001:web:dcd6b15832615bbf983498",
    measurementId: "${config.measurementId}"
  };

  // Reference messages collection
var messagesRef = firebase.database().ref('contactformmessages');

$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});