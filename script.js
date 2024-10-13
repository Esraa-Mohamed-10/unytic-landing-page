
// Dynamically load EmailJS script
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
script.type = 'text/javascript';
script.onload = function () {
    // Initialize EmailJS
    emailjs.init('0xhca4hzX6IonMPOM'); // Replace with your actual public key
};
document.head.appendChild(script);

// Event Listener for Form Submission
document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    SendMail(); // Call the SendMail function
});

// Function to Send Email
function SendMail() {
    let parms = {
        to_name: 'Unytic', // Set this to the recipient's name or you can pass it from the form
        name: document.getElementById("formName").value,
        email: document.getElementById("formEmail").value, // Change this to from_email
        message: document.getElementById("formMessage").value,
    };

    emailjs
        .send("service_f6suv4h", "template_hpi48op", parms)
        .then(function (response) {
            document.getElementById('modalMessage').innerText = "Thanks for reaching out! We'll get back to you soon!";
            new bootstrap.Modal(document.getElementById('messageModal')).show();
        }, function (error) {
            console.error("FAILED...", error);
            document.getElementById('modalMessage').innerText = 'Oops! Something went wrong. <br> Please give it another try!';
            new bootstrap.Modal(document.getElementById('messageModal')).show();
        });
}
