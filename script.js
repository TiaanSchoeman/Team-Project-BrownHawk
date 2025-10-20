
        function validateForm() {
        const form = document.getElementById("registrationForm");
        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const message = document.getElementById("message");

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const phonePattern = /^[0-9+\-\s]{8,15}$/;

        if (fullName === "" || email === "" || dateOfBirth === "" || phone === "") {
            message.style.color = "red";
            message.textContent = "Please fill in all required fields.";
            return false;
        }

        if (!email.match(emailPattern)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid email address.";
            return false;
        }

        if (!phone.match(phonePattern)) {
            message.style.color = "red";
            message.textContent = "Please enter a valid phone number.";
            return false;
        }

       
        message.style.color = "green";
        message.textContent = "Registration successful!";
        form.reset();
        return false; 
        }
