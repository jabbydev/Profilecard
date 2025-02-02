function updateLocalTime() {
    const now = new Date();
    
    // Adjust to UTC +1 (Nigerian Time)
    const timeOffset = 1;  // Offset by 1 hour (UTC +1)
    const localTime = new Date(now.getTime() + (timeOffset * 60 * 60 * 1000));  // Add 1 hour to the UTC time
    
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('utc-time').textContent = `Current Time: ${formattedTime}`;
}

setInterval(updateLocalTime, 1000);
updateLocalTime();
