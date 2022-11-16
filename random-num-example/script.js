window.addEventListener("load", function () {

  // TODO #1 - Take a look at native global objects, window and document
  console.log(window);
  console.log("document", document);
  console.dir(document);


  /* CREATE OBJECTS */

  // Generally a good idea to declare objects outside of listeners so they are in scope for everything
  // There are exceptions - like if the element isn't on the page yet because it gets added later
  
  // Object needed for TODO #2
  const date = document.getElementById("date");

  // Objects needed for TODO #3
  const numButton = document.getElementById("num-button");
  const numBox = document.getElementById("num-box");
  const randomNum = document.getElementById("random-num");


  /* CODE TO RUN IMMEDIATELY */

  // Run any code needed to display things on page when it first loads

  // TODO #2 - Add to existing text using new Date object and .toLocaleDateString() method
  date.innerHTML += ` ${new Date().toLocaleDateString()}`;


  /* EVENT LISTENERS */

  // TODO #3 - Add a click event listener for the button to generate a random number
  // Will also need to make the div holding the number visible
  numButton.addEventListener("click", function () {

    // Test listener with log to console
    console.log("I clicked the button!");

    // Change innerHTML of randomNum to a number between 1-50
    let num = Math.ceil(Math.random() * 50);
    randomNum.innerHTML = num;

    // TODO #4 - Change color of number to yellowgreen if even or coral if odd
    // BONUS: Also change the page background to match (use document.body)
    if (num % 2 === 0) {
      randomNum.style.color = "yellowgreen";
      document.body.style.backgroundColor = "yellowgreen";
    } else {
      randomNum.style.color = "coral";
      document.body.style.backgroundColor = "coral";
    }
  
    // TODO #5 - If the random number is evenly divisible by 3, add the spinning class; otherwise remove it
    if (num % 3 === 0) {
      numButton.classList.add('spinning');
    } else {
      numButton.classList.remove('spinning');
    }
  
    // TODO #6 - Trigger alert if number is evenly divisible by 5
    // NOTE: Use setTimeout() to deal with race condition; 50ms is plenty of time to delay
    if (num % 5 === 0) {
      setTimeout(function() {
        alert(`
        The number ${num} is a multiple of 5!
        `);
      }, 50);
    }
  });

  // As part of TODO #3: Take a look at object content using console.log and console.dir
  console.log("numButton", numButton);
  console.dir(numButton);
  console.log("numBox", numBox);
  console.dir(numBox);
  console.log("randomNum", randomNum);
  console.dir(randomNum);
  
});
