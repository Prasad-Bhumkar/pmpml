document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split('T')[0];
    console.log("Current date set to:", today); // Log the current date for debugging

    const bookingDateDisplay = document.getElementById('bookingDateDisplay');
    if (bookingDateDisplay) {
        bookingDateDisplay.textContent = today; // Set today's date in the booking date display
    } else {
        console.error("Element with ID 'bookingDateDisplay' not found.");
    }

    const viewPassBtn = document.getElementById("viewPassBtn");
    if (viewPassBtn) {
        viewPassBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = "./check3/index.html"; // Navigate to check3/index.html
        });
    }
});
