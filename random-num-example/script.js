window.addEventListener("load", function () {

  // TODO #1 - Take a look at native global objects, window and document
  console.log(window);
  console.log("document", document);
  console.dir(document);


  /* CREATE OBJECTS */

  // Generally a good idea to declare objects outside of listeners so they are in scope for everything
  // There are exceptions - like if the element isn't on the page yet because it gets added later
  
  // Object needed for TODO #2

  // Objects needed for TODO #3



  /* CODE TO RUN IMMEDIATELY */

  // Run any code needed to display things on page when it first loads

  // TODO #2 - Add to existing text using new Date object and .toLocaleDateString() method



  /* EVENT LISTENERS */

  // TODO #3 - Add a click event listener for the button to generate a random number
  // Will also need to make the div holding the number visible

  // TODO #4 - Change color of number to yellowgreen if even or coral if odd
  // BONUS: Also change the page background to match (use document.body)

  // TODO #5 - If the random number is evenly divisible by 3, add the spinning class; otherwise remove it

  // TODO #6 - Trigger alert if number is evenly divisible by 5
  // NOTE: Use setTimeout() to deal with race condition; 50ms is plenty of time to delay



  // As part of TODO #3: Take a look at object content using console.log and console.dir

  
});
