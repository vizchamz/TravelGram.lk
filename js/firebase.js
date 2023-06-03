const firebaseConfig = {
    apiKey: "AIzaSyC9YiKtEtnJ9B7t6Ej8O5XtAbPIJE1Z8T4",
    authDomain: "travelgramlk-c14ac.firebaseapp.com",
    projectId: "travelgramlk-c14ac",
    storageBucket: "travelgramlk-c14ac.appspot.com",
    messagingSenderId: "424141890189",
    appId: "1:424141890189:web:aeaafbd1a44665362b78c4",
    measurementId: "G-WTJRETEV3X",
    databaseURL: "https://travelgramlk-c14ac-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);

const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    const comment = document.getElementById('comment').value;

    const data = {
        name,
        email,
        gender,
        age,
        country,
        comment
    };

    firebase.database().ref('contactFormData').push(data)
        .then(() => {
            Swal.fire('Success!', 'Comment added successfully.', 'success');
            contactForm.reset();
        })
        .catch((error) => {
            Swal.fire('Error!', 'Error adding comment.', 'error');
        });
});

const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const telephoneNo = document.getElementById('telephoneNo').value;
    const noOfAdults = document.getElementById('noOfAdults').value;
    const notes = document.getElementById('notes').value;

    const data = {
        name,
        email,
        destination,
        telephoneNo,
        noOfAdults,
        notes
    };

    firebase.database().ref('bookingFormData').push(data)
        .then(() => {
            Swal.fire('Success!', 'Booking successfully placed.', 'success');
            bookingForm.reset();
        })
        .catch((error) => {
            Swal.fire('Error!', 'Error adding a booking.', 'error');
        });
});