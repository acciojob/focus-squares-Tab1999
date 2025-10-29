window.onload = function () {
    // Get all squares by their IDs
    const square1 = document.getElementById('square1');
    const square2 = document.getElementById('square2');
    const square3 = document.getElementById('square3');

    // Store them in an array for easy iteration
    const squares = [square1, square2, square3];

    // Loop through each square
    squares.forEach((square) => {
        // When mouse enters one square
        square.addEventListener('mouseenter', () => {
            squares.forEach((s) => {
                if (s !== square) {
                    s.style.backgroundColor = '#6F4E37'; // Coffee
                }
            });
        });

        // When mouse leaves, reset all to Lavender
        square.addEventListener('mouseleave', () => {
            squares.forEach((s) => {
                s.style.backgroundColor = '#E6E6FA'; // Lavender
            });
        });
    });
};
