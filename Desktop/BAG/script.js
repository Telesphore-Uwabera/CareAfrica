const feedbackForm = document.getElementById("feedback-form");
const successSection = document.getElementById("success");
const additionalFeedbackButton = document.getElementById("additional-feedback-button");

feedbackForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  feedbackForm.style.display = "none";
  successSection.style.display = "block";
});

additionalFeedbackButton.addEventListener("click", function() {
  feedbackForm.style.display = "block";
  successSection.style.display = "none";
});
