// Function to show the Data Science Pop-up
function showPopup() {
    console.log("Entered DS pop up");
    const popup = document.querySelector('.popup-container');
    popup.classList.remove('hidden');

    // Close the pop-up when the user clicks outside of it
    document.addEventListener('click', closePopupOutsideDS, true);
}

// Function to close the pop-up
function closePopup() {
    const popup = document.querySelector('.popup-container');
    popup.classList.add('hidden');

    document.removeEventListener('click', closePopupOutsideDS);
    window.removeEventListener('scroll', closePopup);
}

// Function to close the pop-up when clicking outside
function closePopupOutsideDS(event) {
    console.log('Clicked outside of DS pop up');
    const popup = document.querySelector('.popup-container');
    if (!popup.contains(event.target)) {
        console.log('Closing Data Science popup');
        closePopup();
    }
}


// Function to show the Artificial Intelligence Pop-up
function showAIPopup() {
    const popup = document.querySelector('.AI-Popup-container');
    popup.classList.remove('hiddenAI');

    // It will close when the user clicks anywhere outside the pop up message
    document.addEventListener('click', closePopupOutsideAI, true);
}

function closeAIPopup() {
    const popup = document.querySelector('.AI-Popup-container');
    popup.classList.add('hiddenAI');
}

// Function to close the pop-up when clicking outside
function closePopupOutsideAI(event) {
    console.log('Clicked outside of AI pop up');
    const popup = document.querySelector('.AI-Popup-container');
    if (!popup.contains(event.target)) {
        console.log('Closing AI popup');
        closeAIPopup();
    }
}