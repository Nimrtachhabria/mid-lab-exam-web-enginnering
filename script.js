function logFormData(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    const fullName = document.getElementsByClassName("eg-zoya-memon").value;
    const email = document.getElementsByClassName("eg").value;
    
    const contactNumber = document.getElementsByClassName("eg").value;
    const comment = document.getElementsByClassName("eg-requesting-for").value;

    console.log("Full Name: " + fullName);
    console.log("Email: " + email);
    console.log("Contact Number: " + contactNumber);
    console.log("Comment: " + comment);
  }

  // Add event listener to the form
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", logFormData);