const secondsHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.long-hand');
const hoursHand = document.querySelector('.short-hand');

/* 'new Date()' creates an instance of the Date class from which we can get all kinds of things such as current date, hours, minutes, seconds etc */
function activateClock() {
    const currentTime = new Date();

    /* 
- Here, how the seconds will rotate is stored in 'secondsDegree' variable. 
- Then 'rotate(${secondsDegrees}deg)' to rotate the clock hand.
- I divided by 60 because 1 minute = 60 second
- I multiplied by 360 because the circumference of a circle is 360 degrees */
    const seconds = currentTime.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;


    /* 
    - Here, how the minutes will rotate is stored in 'minutesDegrees' variab le in order to turn the hand. 
    - Then 'rotate(${minutesDegrees}deg)' to rotate the clock hand.
    - I divided by 60 because 1 hour = 60 minutes
    - I added second hand position with minutes because the minute's hand is in the right place, depending on the seconds hand*/
    const minutes = currentTime.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;


    const hours = currentTime.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// rotate() function need to be called every 1 second i.e. 1000 milliseconds

setInterval(activateClock, 1000);
activateClock();