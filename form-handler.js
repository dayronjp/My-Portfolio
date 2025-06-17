document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");
  const submitBtn = form.querySelector('input[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dayronjp17@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        showMessage("✅ Message sent successfully!", "success");
        form.reset();
      } else {
        throw new Error("Formsubmit error");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("❌ Failed to send message. Please try again.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.value = "SEND";
    }
  });

  function showMessage(text, type) {
    statusDiv.textContent = text;
    statusDiv.className = type; // 
    statusDiv.style.opacity = "1";

    setTimeout(() => {
      statusDiv.style.opacity = "0";
    }, 5000);
  }
});
