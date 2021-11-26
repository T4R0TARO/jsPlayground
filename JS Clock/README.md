### Methods and Concepts Used
JS
- new Date()
- getSeconds()
- getHours()
- setInterval()

CSS
- transform: rotate()   
- transform-origin: 100%;

### Code Breakdown 
```js 

// contain clock hands in variable for later use 
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

// will display the current second, minute, and hour
  function setDate() {
    const now = new Date();

    // get the current second
    const seconds = now.getSeconds();
    // translate the current second to degrees in a circle ((s/60) * 360) + 90
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // change the style of the seconds hands by using the value of seconds degrees as the value of the rotate deg property.
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // get current minute
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    //get current hour
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
// set interval to fire function in a loop
  setInterval(setDate, 1000);

// fire function
  setDate();
```