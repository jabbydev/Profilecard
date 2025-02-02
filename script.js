function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('utc-time').textContent = `${utcTime}`;
}

setInterval(updateUTCTime, 1000);
updateUTCTime();
