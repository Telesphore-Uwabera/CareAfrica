// Define a JavaScript object to store user data
var users = [];

// Function to validate password strength
function isPasswordStrong(password) {
  // Define regular expressions for password strength
  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var digitRegex = /\d/;
  var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // Check if the password meets the minimum requirements
  return (
    password.length >= 8 && // At least 8 characters long
    uppercaseRegex.test(password) && // Contains at least one uppercase letter
    lowercaseRegex.test(password) && // Contains at least one lowercase letter
    digitRegex.test(password) && // Contains at least one digit
    specialCharRegex.test(password) // Contains at least one special character
  );
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

// Function to handle research request
function submitResearchRequest(user, researchTopic) {
  // Perform research request handling logic here
  console.log(user.username + ' submitted a research request on ' + researchTopic);
}

// Function to handle submitting a report
function submitReport(user, reportContent) {
  // Add the report to the educational resources object
  educationalResources.reports.push({ user: user.username, content: reportContent });
}

// Define a JavaScript object to store educational resources
var educationalResources = {
  courses: [
    { title: 'Introduction to Wildlife Conservation', url: 'https://example.com/course1' },
    { title: 'Conservation Biology Fundamentals', url: 'https://example.com/course2' },
    { title: 'Wildlife Management Techniques', url: 'https://example.com/course3' }
  ],
  reports: []
};

// Define a JavaScript object to store park and forest locations
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
// JavaScript for rotating images with fade-in/out animation
const rotatingImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg"];
let currentIndex = 0;

function rotateImage() {
  const rotatingImage = document.getElementById("rotating-image");
  const nextIndex = (currentIndex + 1) % rotatingImages.length;
  
  // Fade out the current image
  rotatingImage.style.opacity = 0;
  
  // Load the next image
  const nextImage = new Image();
  nextImage.onload = function() {
    rotatingImage.src = rotatingImages[nextIndex];
    // Fade in the next image
    rotatingImage.style.opacity = 1;
  };
  nextImage.src = rotatingImages[nextIndex];
  
  currentIndex = nextIndex;
}

// Initially load the first image
const rotatingImage = document.getElementById("rotating-image");
rotatingImage.src = rotatingImages[currentIndex];

setInterval(rotateImage, 3000); // Rotate images every 3 seconds
