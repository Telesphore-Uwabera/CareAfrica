const videoElement = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

videoElement.addEventListener("click", toggleFullScreen);
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen();
        }
        videoElement.play();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        videoElement.pause();
    }
}

function playVideo() {
    videoElement.play();
}

function pauseVideo() {
    videoElement.pause();
}
function redirectToImage() {
    window.location.href = "CareAfrica.png";
}
function redirectToHome() {
    window.location.href = "index.html";
}
function redirectToAboutUs() {
    window.location.href = "About_us.html";
  }
  function redirectToOurStrategy() {
    window.location.href = "Our_strategy.html";
  }
  function redirectToPublications() {
    window.location.href = "Publications.html";
  }
  function redirectToNewsRoom() {
    window.location.href = "News_room.html";
  }
  function redirectToEducation() {
    window.location.href = "Education.html";
  }
  function redirectToSponsors() {
    window.location.href = "Sponsors.html";
  }
  function redirectToWorkWithUs() {
    window.location.href = "Work_with_us.html";
  }
  function redirectToContacts() {
    window.location.href = "Contacts.html";
  }
      
      