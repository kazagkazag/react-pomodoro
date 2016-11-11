export function formatTime(time = 0) {
    const minutes = Math.floor(time / 60);
    const seconds = addLeadingZero(time % 60);

    return `${minutes}:${seconds}`;
}

function addLeadingZero(number) {
    return (number + 100).toString().slice(-2);
}