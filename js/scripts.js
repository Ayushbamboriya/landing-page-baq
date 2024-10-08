// Array to store unique email addresses
const uniqueEmails = [];

// Function to notify the user and save email using formsubmit.co
function notifyMe() {
    const email = document.getElementById("email-input").value;
    const errorMessageElement = document.getElementById("error-message");
    const successMessageElement = document.getElementById("success-message");

    // Reset the error and success messages
    errorMessageElement.style.display = "none";
    errorMessageElement.textContent = "";
    successMessageElement.style.display = "none"; // Hide success message initially
    successMessageElement.textContent = "";

    if (validateEmail(email)) {
        // Check if the email is already in the uniqueEmails array
        if (uniqueEmails.includes(email)) {
            errorMessageElement.style.display = "block";
            errorMessageElement.textContent = "This email address has already been entered";
            return;
        }

        // If the email is valid and not duplicated, submit the form
        document.querySelector("form").submit();

        // Add the email to the uniqueEmails array
        uniqueEmails.push(email);

        // Display success message
        successMessageElement.style.display = "block";
        successMessageElement.textContent = "Email submitted successfully!";
        successMessageElement.style.color = "green"; // Set text color to green

        // Clear input after submission
        document.getElementById("email-input").value = "";
    } else {
        errorMessageElement.style.display = "block";
        errorMessageElement.textContent = "Please enter a valid email address.";
    }
}

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Event listener for Notify Me button
// document.getElementById("notify-button").addEventListener("click", notifyMe);


// Function to open WhatsApp chat
function openWhatsApp() {
    window.open("https://wa.me/+971588165253", "_blank");
}

// Function to open Instagram page
function openInstagram() {
    window.open("https://www.instagram.com/babalqadr", "_blank");
}

function openYouTube() {
    window.open("https://www.youtube.com/@babalqadr", "_blank");
}

// Event listeners for WhatsApp and Instagram
// document.querySelector(".whatsapp").addEventListener("click", openWhatsApp);
// document.querySelector(".instagram").addEventListener("click", openInstagram);
document.querySelector(".fab.fa-youtube").addEventListener("click", openYouTube);
// document.querySelector(".whatsapp").addEventListener("click", openWhatsApp);
// document.querySelector(".instagram").addEventListener("click", openInstagram);
document.querySelector(".fab.fa-whatsapp").addEventListener("click", openWhatsApp);
document.querySelector(".fab.fa-instagram").addEventListener("click", openInstagram);

// Function to send email using EmailJS
function sendEmail(e) {
    e.preventDefault(); // Prevent default form submission
    const errorMessageElement = document.getElementById("error-message");
    const successMessageElement = document.getElementById("success-message");

    // Send the form data using EmailJS
    emailjs.sendForm('service_h1aiij9', 'template_sawk31d', this)
        .then(function() {
            successMessageElement.style.display = "block";
            successMessageElement.textContent = "Email submitted successfully!";
            successMessageElement.style.color = "green"; // Set text color to green
        }, function(error) {
            // Log error for debugging
            console.error('Failed to send email:', error);
            errorMessageElement.style.display = "block";
            errorMessageElement.textContent = "Faild to send email. Try again!";
        });
}

// Add the event listener for form submission
document.getElementById('myForm').addEventListener('submit', sendEmail);

// Initialize EmailJS
(function(){
    emailjs.init("OPk7Fy1rUG8_UdTVY");
})();