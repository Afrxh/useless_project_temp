const recordButton = document.getElementById("recordButton");
const displayText = document.getElementById("displayText");
const birdSound = document.getElementById("birdSound");

// Check if the Web Speech API is supported
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // Event listener for when the recognition is done
    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        displayText.innerText = "You said: " + speechResult;
        translateToBirdsong();
    };

    // Event listener for errors
    recognition.onerror = (event) => {
        console.error("Error occurred in recognition: " + event.error);
        displayText.innerText = "Error: " + event.error;
    };

    // Handle recording start via button
    recordButton.addEventListener("click", () => {
        console.log("Record button clicked!"); // This should appear in the console when clicked
        displayText.innerText = "Listening...";
        recognition.start();
    });
} else {
    displayText.innerText = "Sorry, Speech Recognition not supported.";
}

function translateToBirdsong() {
    birdSound.play(); // Play a bird sound
}
