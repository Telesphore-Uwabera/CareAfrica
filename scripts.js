// Define an array to store user data
var users = [];

// Function to validate password strength
function isPasswordStrong(password) {
  // Define regular expressions for password strength
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Function to handle user registration
function registerUser(username, email, password) {
  // Check if the password is strong enough
  if (!isPasswordStrong(password)) {
    return { success: false, message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character' };
  }

  // Check if the username or email already exists
  var existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return { success: false, message: 'Username or email already exists' };
  }

  // Add the new user to the users array
  users.push({ username: username, email: email, password: password });
  return { success: true, message: 'User registered successfully' };
}

// Function to handle user login
function loginUser(usernameOrEmail, password) {
  // Find the user by username or email
  var user = users.find(user => user.username === usernameOrEmail || user.email === usernameOrEmail);
  if (!user) {
    return { success: false, message: 'User not found' };
  }

  // Check if the password matches
  if (user.password !== password) {
    return { success: false, message: 'Incorrect password' };
  }

  // Return success and the user object
  return { success: true, user: user };
}

// Function to handle research request submission
function submitResearchRequest(user, researchTopic) {
  // Perform research request handling logic here
  console.log(user.username + ' submitted a research request on ' + researchTopic);
}

// Function to handle submitting a report
function submitReport(user, reportContent) {
  // Add the report to the educational resources object
  educationalResources.reports.push({ user: user.username, content: reportContent });
}

// Define an object to store educational resources
var educationalResources = {
  courses: [
    { title: 'Introduction to Wildlife Conservation', url: 'https://example.com/course1' },
    { title: 'Conservation Biology Fundamentals', url: 'https://example.com/course2' },
    { title: 'Wildlife Management Techniques', url: 'https://example.com/course3' }
  ],
  reports: []
};

// Define an array to store park and forest locations
var parkLocations = [
  { name: 'National Park A', location: { lat: 123.456, lng: 789.012 } },
  { name: 'Nature Reserve B', location: { lat: 456.789, lng: 123.456 } },
  { name: 'Wildlife Sanctuary C', location: { lat: 789.012, lng: 456.789 } }
];

// Function to get available courses
function getCourses() {
  return educationalResources.courses;
}

// Function to get park and forest locations
function getParkLocations() {
  return parkLocations;
}

// Example usage of the functions
// Submit a report
var user = { username: 'john_doe' }; // Assume the user is logged in
submitReport(user, 'Report content goes here');

// Get available courses
var courses = getCourses();
console.log('Available courses:');
courses.forEach(course => {
  console.log(course.title + ': ' + course.url);
});

// Get park locations
var locations = getParkLocations();
console.log('Park and forest locations:');
locations.forEach(location => {
  console.log(location.name + ': ' + location.location.lat + ', ' + location.location.lng);
});

// Initialize the carousel when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  var carousel = document.querySelector("#carouselExampleIndicators");
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000, // Set interval time in milliseconds (e.g., 2000ms for 2 seconds)
    pause: "hover" // Pause on mouse hover
  });
});

// Function to handle registration form submission
document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get input values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform user registration
  var registrationResult = registerUser(username, email, password);

  // Display registration result
  if (registrationResult.success) {
    alert(registrationResult.message);
    // Redirect to login section
    window.location.href = "#login-section";
  } else {
    alert(registrationResult.message);
  }

  // Reset form
  event.target.reset();
});

// Function to handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  var loginUsername = document.getElementById("login-username").value;
  var loginPassword = document.getElementById("login-password").value;

  // Perform user login
  var loginResult = loginUser(loginUsername, loginPassword);

  // Display login result
  if (loginResult.success) {
    alert("Login successful!");
    // Redirect to conservation courses or other protected pages
    window.location.href = "conservation-courses.html";
  } else {
    alert(loginResult.message);
  }

  // Reset form
  event.target.reset();
});
