const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Ki-حبس l-refresh dyal l-page

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thank you! Your message has been me submitted.");
                contactForm.reset();
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            alert("Oops! There was a network error.");
        }
    });
}
