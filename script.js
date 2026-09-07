const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();
    });
}