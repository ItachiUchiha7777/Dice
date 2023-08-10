function changeImage() {
    // Generate a random number between 1 and 6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Get the clicked image element
    var clickedImage = event.target;

    // Update the src attribute using template literal
    clickedImage.src = `images/dice${randomNumber}.png`;

    // Optionally, you can also change the alt text
    clickedImage.alt = "New Image";
}
