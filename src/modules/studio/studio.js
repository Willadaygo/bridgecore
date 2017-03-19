/*
 *  Set up an entry for each locale of clock we want to use
 */
function getTimes() {
  moment.tz.add([
    'Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6',
    'America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6',
  ])
  const now = new Date()
  // Set the time manually for each of the clock types we're using
  const times = [
    {
      jsclass: 'js-london',
      jstime: moment.tz(now, 'Europe/London'),
    },
    {
      jsclass: 'js-sanfran',
      jstime: moment.tz(now, 'America/Los_Angeles'),
    },
  ]
  return times
}

/*
 * Set up the clocks that use moment.js
 */
function initInternationalClocks() {
  // Initialise the clock settings and the three times
  const times = getTimes()
  for (let i = 0; i < times.length; i += 1) {
    const hours = times[i].jstime.format('h')
    const minutes = times[i].jstime.format('mm')
    const seconds = times[i].jstime.format('ss')

    const degrees = [
      {
        hand: 'hours',
        degree: (hours * 30) + (minutes / 2),
      },
      {
        hand: 'minutes',
        degree: (minutes * 6),
      },
      {
        hand: 'seconds',
        degree: (seconds * 6),
      },
    ]
    for (let j = 0; j < degrees.length; j += 1) {
      const elements = document.querySelectorAll(`.active .${times[i].jsclass} .Clock__hand--${degrees[j].hand}`)
      for (let k = 0; k < elements.length; k += 1) {
        elements[k].style.webkitTransform = `rotateZ(${degrees[j].degree}deg)`
        elements[k].style.transform = `rotateZ(${degrees[j].degree}deg)`
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (degrees[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree)
        }
      }
    }
  }
  // Add a class to the clock container to show it
  const elements = document.querySelectorAll('.Clock')
  for (let l = 0; l < elements.length; l += 1) {
    elements[l].className = `${elements[l].className} show`
  }
}

/*
 * Starts any clocks using the user's local time
 */
// function initLocalClocks() {
//   // Get the local time using JS
//   const date = new Date;
//   const seconds = date.getSeconds()
//   const minutes = date.getMinutes()
//   const hours = date.getHours()

//   // Create an object with each hand and it's angle in degrees
//   const hands = [
//     {
//       hand: 'hours',
//       angle: (hours * 30) + (minutes / 2),
//     },
//     {
//       hand: 'minutes',
//       angle: (minutes * 6),
//     },
//     {
//       hand: 'seconds',
//       angle: (seconds * 6),
//     },
//   ];
//   // Loop through each of these hands to set their angle
//   for (let j = 0; j < hands.length; j += 1) {
//     const elements = document.querySelectorAll(`.local .Clock__hand--${hands[j].hand}`)
//     for (let k = 0; k < elements.length; k += 1) {
//         elements[k].style.transform = `rotateZ(${hands[j].angle}deg)`
//         // If this is a minute hand, note the seconds position (to calculate minute position later)
//         if (hands[j].hand === 'minutes') {
//           elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle)
//         }
//     }
//   }
// }

/*
 * Move the second containers
 */
function moveSecondHands() {
  const containers = document.querySelectorAll('.Clock--bounce .Clock__container--seconds')
  setInterval(() => {
    for (let i = 0; i < containers.length; i += 1) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6
      } else {
        containers[i].angle += 6
      }
      containers[i].style.webkitTransform = `rotateZ(${containers[i].angle}deg)`
      containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`
    }
  }, 1000)
  for (let i = 0; i < containers.length; i += 1) {
    // Add in a little delay to make them feel more natural
    const randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10
    containers[i].style.transitionDelay = `0.0${randomOffset}s`;
  }
}

/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // More tricky, this needs to move the minute hand when the second hand hits zero
  const containers = document.querySelectorAll('.Clock__container--minutes')
  const secondAngle = containers[containers.length - 1].getAttribute('data-second-angle')
  console.log(secondAngle)
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    const delay = (((360 - secondAngle) / 6) + 0.1) * 1000
    console.log(delay)
    setTimeout(() => {
      moveMinuteHands(containers)
    }, delay)
  }
}

/*
 * Do the first minute's rotation, then move every 60 seconds after
 */
function moveMinuteHands(containers) {
  for (let i = 0; i < containers.length; i += 1) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)'
    containers[i].style.transform = 'rotateZ(6deg)'
  }
  // Then continue with a 60 second interval
  setInterval(() => {
    for (let i = 0; i < containers.length; i += 1) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12
      } else {
        containers[i].angle += 6
      }
      containers[i].style.webkitTransform = `rotateZ(${containers[i].angle}deg)`
      containers[i].style.transform = `rotateZ(${containers[i].angle}deg)`
    }
  }, 60000)
}

/*
*  Main function to set the clock times
*/

const init = () => {
  // Initialise the locale-enabled clocks
  initInternationalClocks()
  // Initialise any local time clocks
  //initLocalClocks()
  // Start the seconds container moving
  moveSecondHands()
  // Set the intial minute hand container transition, and then each subsequent step
  setUpMinuteHands()
}

export default { init }

