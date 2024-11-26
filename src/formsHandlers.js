import { FORM_CONFIG } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  // Newsletter Form Handler
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const messageElement = newsletterForm.querySelector(".formMessage");
      messageElement.style.display = "none";

      const { apiUrl, apiToken } = FORM_CONFIG.newsletterForm;

      const email = newsletterForm.email.value.trim();

      // Updated email regex to support subdomains
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      
      if (!email) {
        messageElement.classList.remove("success");
        messageElement.classList.add("error");
        messageElement.textContent = "Please enter an email address.";        
        messageElement.style.display = "block";
        return;
      }
      
      if (!emailRegex.test(email)) {
        messageElement.classList.remove("success");
        messageElement.classList.add("error");
        messageElement.textContent = "Please enter a valid email address (e.g., john@domain.com).";      
        messageElement.style.display = "block";
        return;
      }

      const payload = { email };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          messageElement.classList.remove("error");
          messageElement.classList.add("success");
          messageElement.textContent = "Thanks for subscribing!";          
          messageElement.style.display = "block";
          newsletterForm.reset();
        } else {
          const error = await response.json();
          messageElement.classList.remove("success");
          messageElement.classList.add("error");
          messageElement.textContent =
            error.message || "Something went wrong. Please try again.";          
          messageElement.style.display = "block";
        }
      } catch (error) {
        messageElement.classList.remove("success");
        messageElement.classList.add("error");
        messageElement.textContent =
          "Unable to connect. Please try again later.";        
        messageElement.style.display = "block";
      }
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const messageElement = contactForm.querySelector(".formMessage");
      messageElement.style.display = "none";

      const { apiUrl, apiToken } = FORM_CONFIG.contactForm;

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        messageElement.textContent = "Please fill out all fields.";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
        return;
      }

      const payload = { name, email, message };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          messageElement.textContent = "Thanks for reaching out!";
          messageElement.style.color = "green";
          messageElement.style.display = "block";
          contactForm.reset();
        } else {
          const error = await response.json();
          messageElement.textContent =
            error.message || "Something went wrong. Please try again.";
          messageElement.style.color = "red";
          messageElement.style.display = "block";
        }
      } catch (error) {
        messageElement.textContent =
          "Unable to connect. Please try again later.";
        messageElement.style.color = "red";
        messageElement.style.display = "block";
      }
    });
  }
});
