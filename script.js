const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("response");


form.addEventListener("submit", function(e) {
e.preventDefault();
responseMsg.textContent = "Your message has been received! I will contact you shortly.";
form.reset();
});