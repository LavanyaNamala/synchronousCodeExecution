let count = 0;

// Start by logging "Loading..." every 1 second
const intervalId = setInterval(() => {
  console.log("Loading...");
  count++;

  // Stop after 5 seconds and log "Loaded successfully!"
  if (count === 5) {
    clearInterval(intervalId);
    console.log("Loaded successfully!");
  }
}, 1000);
