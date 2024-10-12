
// Dynamically load EmailJS script
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
script.type = 'text/javascript';
script.onload = function () {
    // Initialize EmailJS
    emailjs.init('Kf46iGPQJ_1g66U4B'); // Replace with your actual public key
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
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_c38tg0s", "template_c4occxb", parms)
        .then(function (response) {
            alert("تم ارسال استفسارك سنتواصل بك قريبا");
        }, function (error) {
            console.error("FAILED...", error);
            alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
        });
}
