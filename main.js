// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  // let error = document.querySelector('h2');
  // error.hidden = true;
  let modal = document.getElementById("modal");
  let modalMessage = document.getElementById("modal-message");
  modal.classList.add("hidden");
  let likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // When server request is successful, change the heart to a full heart
          button.classList.toggle("activated-heart");
          // Add the 'like-glyph' class to the heart
          button.querySelector(".like-glyph").classList.toggle("activated-heart")
          if (heartGlyph.textContent === EMPTY_HEART) {
            heartGlyph.textContent = FULL_HEART;
          } else {
            heartGlyph.textContent = EMPTY_HEART;
          }
        })
        .catch(() => {
          // If the server request fails, display the error modal with the error message
          modalMessage.textContent = "Random server error. Please try again.";
          modal.classList.remove("hidden");
          // Hide the modal after 3 seconds using setTimeout and the 'hidden' class
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });

});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
