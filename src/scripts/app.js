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
      console.log(isValid(email));

      // Show/hide invalid email message
      if (!isValid(email)) {
        invalidEmailMsg.classList.remove("hidden");
      } else {
        invalidEmailMsg.classList.add("hidden");
      }
    };

  const isValid = function (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
};
