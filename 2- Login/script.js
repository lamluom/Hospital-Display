document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Basic validation check
    if (username === "" || password === "") {
      alert("Please fill out all fields.");
    } else {
      // Process login - this could be where you send data to the server
      alert("Logged in successfully!");
    }
  });
  
  document.getElementById("forgot-password").addEventListener("click", function() {
    alert("Forgot password functionality coming soon!");
  });
  
  document.getElementById("sign-up").addEventListener("click", function() {
    alert("Redirecting to sign up page...");
  });
  