
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
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();
    
    if (!name) {
        showToast("Name is required");
        return;
    }
    
    if (!email) {
        showToast("Email is required");
        return;
    }
    
    if (!validateEmail(email)) {
        showToast("Please enter a valid email");
        return;
    }
    
    if (!message) {
        showToast("Message is required");
        return;
    }

    SendMail(); 
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
            document.getElementById("contact-form").reset();
        }, function (error) {
            console.error("FAILED...", error);
            document.getElementById('modalMessage').innerText = 'Oops! Something went wrong. Please give it another try!';
            new bootstrap.Modal(document.getElementById('messageModal')).show();
        });
}


// Function to Show Toast
function showToast(message) {
    document.getElementById("toastMessage").innerText = message;
    let toast = new bootstrap.Toast(document.getElementById('errorToast'));
    toast.show();
}

// Function to Validate Email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    document.addEventListener("click", function (event) {
        const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        
        // If the click is outside and the navbar menu is open, close it
        if (!isClickInside && navbarCollapse.classList.contains("show")) {
            navbarToggler.click(); // Programmatically click the toggle button to close the menu
        }
    });

