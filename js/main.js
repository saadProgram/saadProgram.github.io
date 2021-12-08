

var config = {
    apiKey: "AIzaSyD0JJS5XwLcahOJW5J0hztX_Ila2GYL-ek",
    authDomain: "supermarket-af419.firebaseapp.com",
    databaseURL: "https://supermarket-af419-default-rtdb.firebaseio.com",
    projectId: "supermarket-af419",
    storageBucket: "supermarket-af419.appspot.com",
    messagingSenderId: "65288925001",
    appId: "1:65288925001:web:dcd6b15832615bbf983498",
    measurementId: "${config.measurementId}"
  }; firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    // var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('subject');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, subject, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
    //   company:company,
      email:email,
      subject:subject,
      message:message
    });
  }