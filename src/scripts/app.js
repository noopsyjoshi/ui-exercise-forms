window.onload = function () {
  console.log("loaded...");

  // Psuedo Code
  // Get DOM elements, email, submit, info messages
  // Add click event listener to submit button
  // Get email value and validate it
  // If invaid, show error message
  // Pass data containing email to url in the server
  // Display success if user email found in db.json
  // Display error if user email not found or email string empty

  // Get DOM elements, email, submit, info messages
  const input = document.querySelector("#pw-reset-email");
  const submit = document.querySelector("#pw-reset-submit");
  const invalidEmailMsg = document.querySelector("#pw-reset-invalid");

  if (submit)
    submit.onclick = function (e) {
      // Prevent form refresh
      e.preventDefault();

      // Get email value
      let email = input.value;

      // Validate email
      isValid(email);

      // Show/hide invalid email message
      if (!isValid(email)) {
        invalidEmailMsg.classList.remove("hidden");
      } else {
        invalidEmailMsg.classList.add("hidden");
      }

      const data = { email: email };

      // Get response using url in server.js
      fetch("http://localhost:3005/customer/account/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors.length === 0) {
            console.log("user found");
            // display success message
          }

          if (data.errors.length > 0) {
            const status = data.errors[0].status;
            if (status === 404 || status === 400) {
              console.log("user not found");
              // display error message
            }
          }
        })
        .catch((error) => {
          console.error("error", error);
        });
    };

  const isValid = function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
};
