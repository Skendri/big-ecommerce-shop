document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to handle validation

        // Clear previous errors
        document.getElementById('error-message').textContent = '';

        // Get form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const address = document.getElementById('address').value;

         // Simple client-side validation
         let errorMessage = '';

            // Check if email is empty or invalid

            if (!email) {
                errorMessage += 'Email is required. ';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                errorMessage += 'Please enter a valid email. ';
            }

            // Check if password is empty or too short
            if (!password) {
                errorMessage += 'Password is required. ';
            } else if (password.length < 10) {
                errorMessage += 'Password must be at least 6 characters long. ';
            }

             // Validate address
            if (!address) {
                errorMessage += 'Address is required. ';
            } else if (address.length < 10) {
                errorMessage += 'Address must be at least 10 characters long. ';
            }

            // If there are any validation errors, display them
            if (errorMessage) {
                document.getElementById('error-message').textContent = errorMessage;
            } else {
                // If no errors, send data to the server
                sendDataToServer({ email, password });
            }
        })

        function sendDataToServer(data) {
        // Use Fetch API or AJAX to send data to the server
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    document.querySelectorAll('.user-box input').forEach(input => {
    input.addEventListener('input', function() {
        // Check if the input field has a value
        if (input.value.trim() !== '') {
            // Stop animation once the field has a value
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
});