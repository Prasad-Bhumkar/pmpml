// Set booking and validity time
const bookingDate = new Date();
const formattedDate = bookingDate.toLocaleDateString('en-IN', {
  day: '2-digit',
  month: 'short',
  year: '2-digit',
});

const formattedTime = bookingDate.toLocaleTimeString('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});

document.getElementById('bookingTime').textContent = `${formattedDate} | 07:18 AM`;
document.getElementById('validityTime').textContent = `${formattedDate} | 11:59 PM`;

// Countdown Timer
function updateCountdown() {
  const now = new Date();

  const endTime = new Date();
  endTime.setHours(23, 59, 0, 0); // End at 11:59 PM

  if (now <= endTime) {
    const remainingTime = endTime - now;

    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = 
      `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  } else {
    document.getElementById('countdown').textContent = "Expired - Restarting tomorrow";
  }
}

 // Function to generate the random number based on booking date and time
 function generateNumber() {
    const year = String(bookingDate.getFullYear()).slice(-2); // Last 2 digits of the year
    const month = String(bookingDate.getMonth() + 1).padStart(2, '0'); // Month in 2 digits
    const day = String(bookingDate.getDate()).padStart(2, '0'); // Day in 2 digits

    // Extract time from the booking date
    const hour = String(bookingDate.getHours()).padStart(2, '0'); // Hour in 2 digits
    const minute = String(bookingDate.getMinutes()).padStart(2, '0'); // Minute in 2 digits

    // Generate random uppercase alphabets (A-Z)
    const randomAlpha1 = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random alphabet
    const randomAlpha2 = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random alphabet
    const randomAlpha3 = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random alphabet
    const randomAlpha4 = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random alphabet

    // Generate random 2-digit number
    const random2Digits = Math.floor(10 + Math.random() * 90);

    // Combine all parts to create the final code
    const generatedNumber = `${year}${month}${day}${hour}${minute}${randomAlpha1}${randomAlpha2}${random2Digits}${randomAlpha3}${randomAlpha4}`;

    // Display the generated number in HTML
    document.getElementById('autoNumber').textContent = generatedNumber;
}

// Generate number based on booking date and time
generateNumber();

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initialize countdown


