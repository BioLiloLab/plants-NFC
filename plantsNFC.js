// List of colors
const colors = ['#9ec86d', '#71aa6e', '#eeee83', '#eebe1b', '#448838', '#9c9ab1', '#dad5b2', '#87a352', '#905657', '#16351b'];

// Function to change the background color
function changeBackgroundColor() {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)
    const colorIndex = currentHour % colors.length; // Determine which color to use
    document.body.style.backgroundColor = colors[colorIndex]; // Set the background color
}

// Initial call to set the color when the page loads
changeBackgroundColor();

// Optional: If you want to update the color every hour without refreshing the page
setInterval(changeBackgroundColor, 3600000); // 3600000 ms = 1 hour
