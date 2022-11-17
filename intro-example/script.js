window.addEventListener('load', function() {  

  // TODO: Take a look at native global objects, window and document
  console.log(window);
  console.log("document", document);
  console.dir(document);
  
  const intro = document.getElementById('intro');

  // Always available because it comes from browser's current version of the document
  console.log(intro.innerHTML);
  console.log(intro.style.fontSize);

  // Not available yet because JS can't read the CSS file - it can only read inline
  console.log(intro.style.color);
  
  // TODO: Change the values of the text, color, and font size
  intro.innerHTML = 'Ready to go!';
  intro.style.color = 'green';
  intro.style.fontSize = '12pt';

  // TODO: Make the text bold and italicized as well
  intro.style.fontWeight = 'bold';
  intro.style.fontStyle = 'italic';
  
  // TODO: Log the intro element to see the inline styling added
  console.log(intro);

  // TODO: Log all five properties to see their values
  console.log(intro.innerHTML);
  console.log(intro.style.color);
  console.log(intro.style.fontSize);
  console.log(intro.style.fontWeight);
  console.log(intro.style.fontStyle);  
});
